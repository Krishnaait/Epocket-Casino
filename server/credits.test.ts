import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(userId: number = 1): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: userId,
    openId: `test-user-${userId}`,
    email: `test${userId}@example.com`,
    name: `Test User ${userId}`,
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

describe("Credit System", () => {
  it("should initialize user with 1000 credits", async () => {
    const { ctx } = createAuthContext(Math.floor(Math.random() * 1000000));
    const caller = appRouter.createCaller(ctx);

    const credits = await caller.credits.get();

    expect(credits).toBeDefined();
    expect(credits.credits).toBe(1000);
  });

  it("should allow claiming daily bonus", async () => {
    const { ctx } = createAuthContext(Math.floor(Math.random() * 1000000));
    const caller = appRouter.createCaller(ctx);

    // Initialize credits
    await caller.credits.get();

    // Claim daily bonus
    const result = await caller.credits.claimDaily();

    expect(result).toBeDefined();
    expect(result?.canClaim).toBe(true);
    expect(result?.creditsGranted).toBe(200);
  });

  it("should allow resetting credits to 500", async () => {
    const { ctx } = createAuthContext(Math.floor(Math.random() * 1000000));
    const caller = appRouter.createCaller(ctx);

    // Initialize credits
    await caller.credits.get();

    // First, spend all credits
    await caller.credits.update({ amount: 1000, type: 'subtract' });
    
    // Reset credits
    const result = await caller.credits.reset();

    expect(result).toBeDefined();
    expect(result?.credits).toBe(500);
  });
});

describe("Game Recording", () => {
  it("should record a winning game play", async () => {
    const { ctx } = createAuthContext(Math.floor(Math.random() * 1000000));
    const caller = appRouter.createCaller(ctx);

    // Initialize credits
    await caller.credits.get();

    // Record a winning game
    const result = await caller.games.recordPlay({
      gameType: "slots",
      creditsWagered: 50,
      creditsWon: 100,
      result: "win",
    });

    expect(result).toBeDefined();
    expect(result?.gameType).toBe("slots");
    
    // Check updated credits
    const credits = await caller.credits.get();
    expect(credits.credits).toBeGreaterThan(1000); // Won more than started with
  });

  it("should record a losing game play", async () => {
    const { ctx } = createAuthContext(Math.floor(Math.random() * 1000000));
    const caller = appRouter.createCaller(ctx);

    // Initialize credits
    await caller.credits.get();

    // Record a losing game
    const result = await caller.games.recordPlay({
      gameType: "poker",
      creditsWagered: 100,
      creditsWon: 0,
      result: "loss",
    });

    expect(result).toBeDefined();
    expect(result?.gameType).toBe("poker");
    
    // Check updated credits
    const credits = await caller.credits.get();
    expect(credits.credits).toBeLessThan(1000); // Lost some credits
  });
});

describe("Leaderboard", () => {
  it("should retrieve leaderboard data", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const leaderboard = await caller.leaderboard.get({ limit: 10 });

    expect(Array.isArray(leaderboard)).toBe(true);
  });
});

describe("Achievements", () => {
  it("should retrieve all achievements", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const achievements = await caller.achievements.getAll();

    expect(Array.isArray(achievements)).toBe(true);
    expect(achievements.length).toBeGreaterThan(0);
  });

  it("should retrieve user achievements", async () => {
    const { ctx } = createAuthContext(Math.floor(Math.random() * 1000000));
    const caller = appRouter.createCaller(ctx);

    const userAchievements = await caller.achievements.getUserAchievements();

    expect(Array.isArray(userAchievements)).toBe(true);
  });
});
