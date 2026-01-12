import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, bigint } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
  
  // Guest user support - if guestId is set, this is a guest user
  guestId: varchar("guestId", { length: 64 }),
  isGuest: boolean("isGuest").default(false).notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * User credits table - tracks virtual coins for gameplay
 */
export const userCredits = mysqlTable("userCredits", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  credits: int("credits").default(1000).notNull(),
  lastDailyBonus: timestamp("lastDailyBonus"),
  totalEarned: bigint("totalEarned", { mode: "number" }).default(0).notNull(),
  totalSpent: bigint("totalSpent", { mode: "number" }).default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserCredits = typeof userCredits.$inferSelect;
export type InsertUserCredits = typeof userCredits.$inferInsert;

/**
 * Achievements table - defines available achievements
 */
export const achievements = mysqlTable("achievements", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description").notNull(),
  icon: varchar("icon", { length: 50 }).notNull(),
  category: mysqlEnum("category", ["games", "credits", "social", "special"]).notNull(),
  requirement: int("requirement").notNull(), // threshold to unlock
  points: int("points").default(10).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Achievement = typeof achievements.$inferSelect;
export type InsertAchievement = typeof achievements.$inferInsert;

/**
 * User achievements table - tracks unlocked achievements per user
 */
export const userAchievements = mysqlTable("userAchievements", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  achievementId: int("achievementId").notNull(),
  unlockedAt: timestamp("unlockedAt").defaultNow().notNull(),
});

export type UserAchievement = typeof userAchievements.$inferSelect;
export type InsertUserAchievement = typeof userAchievements.$inferInsert;

/**
 * Game history table - tracks all game plays
 */
export const gameHistory = mysqlTable("gameHistory", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  gameType: mysqlEnum("gameType", ["poker", "slots", "roulette", "scratch"]).notNull(),
  creditsWagered: int("creditsWagered").notNull(),
  creditsWon: int("creditsWon").notNull(),
  result: mysqlEnum("result", ["win", "loss", "draw"]).notNull(),
  playedAt: timestamp("playedAt").defaultNow().notNull(),
});

export type GameHistory = typeof gameHistory.$inferSelect;
export type InsertGameHistory = typeof gameHistory.$inferInsert;

/**
 * Leaderboard table - aggregated stats for ranking
 */
export const leaderboard = mysqlTable("leaderboard", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  totalPoints: bigint("totalPoints", { mode: "number" }).default(0).notNull(),
  totalWins: int("totalWins").default(0).notNull(),
  totalGamesPlayed: int("totalGamesPlayed").default(0).notNull(),
  winRate: int("winRate").default(0).notNull(), // percentage
  highestWin: int("highestWin").default(0).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Leaderboard = typeof leaderboard.$inferSelect;
export type InsertLeaderboard = typeof leaderboard.$inferInsert;
