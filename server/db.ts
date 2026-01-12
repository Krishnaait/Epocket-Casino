import { eq, desc, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  userCredits, 
  achievements, 
  userAchievements, 
  gameHistory, 
  leaderboard,
  InsertUserCredits,
  InsertGameHistory,
  InsertUserAchievement,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod", "guestId"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }
    if (user.isGuest !== undefined) {
      values.isGuest = user.isGuest;
      updateSet.isGuest = user.isGuest;
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Credit System Functions

export async function getUserCredits(userId: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(userCredits).where(eq(userCredits.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function initializeUserCredits(userId: number) {
  const db = await getDb();
  if (!db) return null;

  const values: InsertUserCredits = {
    userId,
    credits: 1000,
    totalEarned: 0,
    totalSpent: 0,
  };

  await db.insert(userCredits).values(values);
  return await getUserCredits(userId);
}

export async function updateUserCredits(userId: number, amount: number, type: 'add' | 'subtract') {
  const db = await getDb();
  if (!db) return null;

  const current = await getUserCredits(userId);
  if (!current) return null;

  const newCredits = type === 'add' ? current.credits + amount : current.credits - amount;
  const totalEarned = type === 'add' ? current.totalEarned + amount : current.totalEarned;
  const totalSpent = type === 'subtract' ? current.totalSpent + amount : current.totalSpent;

  await db.update(userCredits)
    .set({ 
      credits: Math.max(0, newCredits),
      totalEarned,
      totalSpent,
    })
    .where(eq(userCredits.userId, userId));

  return await getUserCredits(userId);
}

export async function claimDailyBonus(userId: number) {
  const db = await getDb();
  if (!db) return null;

  const current = await getUserCredits(userId);
  if (!current) return null;

  const now = new Date();
  const lastBonus = current.lastDailyBonus;

  // Check if 24 hours have passed
  if (lastBonus) {
    const hoursSinceLastBonus = (now.getTime() - lastBonus.getTime()) / (1000 * 60 * 60);
    if (hoursSinceLastBonus < 24) {
      return { canClaim: false, hoursRemaining: 24 - hoursSinceLastBonus };
    }
  }

  // Grant 200 credits bonus
  await db.update(userCredits)
    .set({ 
      credits: current.credits + 200,
      totalEarned: current.totalEarned + 200,
      lastDailyBonus: now,
    })
    .where(eq(userCredits.userId, userId));

  return { canClaim: true, creditsGranted: 200 };
}

export async function resetCredits(userId: number) {
  const db = await getDb();
  if (!db) return null;

  await db.update(userCredits)
    .set({ credits: 500 })
    .where(eq(userCredits.userId, userId));

  return await getUserCredits(userId);
}

// Achievement Functions

export async function getAllAchievements() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(achievements);
}

export async function getUserAchievements(userId: number) {
  const db = await getDb();
  if (!db) return [];

  const result = await db
    .select({
      id: userAchievements.id,
      achievementId: userAchievements.achievementId,
      unlockedAt: userAchievements.unlockedAt,
      name: achievements.name,
      description: achievements.description,
      icon: achievements.icon,
      category: achievements.category,
      points: achievements.points,
    })
    .from(userAchievements)
    .leftJoin(achievements, eq(userAchievements.achievementId, achievements.id))
    .where(eq(userAchievements.userId, userId));

  return result;
}

export async function unlockAchievement(userId: number, achievementId: number) {
  const db = await getDb();
  if (!db) return null;

  // Check if already unlocked
  const existing = await db
    .select()
    .from(userAchievements)
    .where(sql`${userAchievements.userId} = ${userId} AND ${userAchievements.achievementId} = ${achievementId}`)
    .limit(1);

  if (existing.length > 0) return null;

  const values: InsertUserAchievement = {
    userId,
    achievementId,
  };

  await db.insert(userAchievements).values(values);
  return values;
}

// Game History Functions

export async function recordGamePlay(data: InsertGameHistory) {
  const db = await getDb();
  if (!db) return null;

  await db.insert(gameHistory).values(data);

  // Update leaderboard
  await updateLeaderboard(data.userId, data.result, data.creditsWon);

  return data;
}

export async function getUserGameHistory(userId: number, limit = 50) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(gameHistory)
    .where(eq(gameHistory.userId, userId))
    .orderBy(desc(gameHistory.playedAt))
    .limit(limit);
}

// Leaderboard Functions

export async function getLeaderboard(limit = 100) {
  const db = await getDb();
  if (!db) return [];

  const result = await db
    .select({
      userId: leaderboard.userId,
      userName: users.name,
      totalPoints: leaderboard.totalPoints,
      totalWins: leaderboard.totalWins,
      totalGamesPlayed: leaderboard.totalGamesPlayed,
      winRate: leaderboard.winRate,
      highestWin: leaderboard.highestWin,
      updatedAt: leaderboard.updatedAt,
    })
    .from(leaderboard)
    .leftJoin(users, eq(leaderboard.userId, users.id))
    .orderBy(desc(leaderboard.totalPoints))
    .limit(limit);

  return result;
}

export async function updateLeaderboard(userId: number, result: 'win' | 'loss' | 'draw', creditsWon: number) {
  const db = await getDb();
  if (!db) return null;

  const existing = await db
    .select()
    .from(leaderboard)
    .where(eq(leaderboard.userId, userId))
    .limit(1);

  if (existing.length === 0) {
    // Create new leaderboard entry
    await db.insert(leaderboard).values({
      userId,
      totalPoints: result === 'win' ? creditsWon : 0,
      totalWins: result === 'win' ? 1 : 0,
      totalGamesPlayed: 1,
      winRate: result === 'win' ? 100 : 0,
      highestWin: result === 'win' ? creditsWon : 0,
    });
  } else {
    // Update existing entry
    const current = existing[0];
    const newTotalWins = current.totalWins + (result === 'win' ? 1 : 0);
    const newTotalGames = current.totalGamesPlayed + 1;
    const newWinRate = Math.round((newTotalWins / newTotalGames) * 100);
    const newHighestWin = Math.max(current.highestWin, result === 'win' ? creditsWon : 0);

    await db.update(leaderboard)
      .set({
        totalPoints: current.totalPoints + (result === 'win' ? creditsWon : 0),
        totalWins: newTotalWins,
        totalGamesPlayed: newTotalGames,
        winRate: newWinRate,
        highestWin: newHighestWin,
      })
      .where(eq(leaderboard.userId, userId));
  }

  return await db.select().from(leaderboard).where(eq(leaderboard.userId, userId)).limit(1);
}
