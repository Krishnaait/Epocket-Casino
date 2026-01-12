import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,
  
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  credits: router({
    // Get user's current credits
    get: protectedProcedure.query(async ({ ctx }) => {
      let credits = await db.getUserCredits(ctx.user.id);
      
      // Initialize credits if user doesn't have any
      if (!credits) {
        credits = await db.initializeUserCredits(ctx.user.id);
      }
      
      return credits;
    }),

    // Claim daily bonus (200 credits)
    claimDaily: protectedProcedure.mutation(async ({ ctx }) => {
      let credits = await db.getUserCredits(ctx.user.id);
      
      if (!credits) {
        credits = await db.initializeUserCredits(ctx.user.id);
      }

      const result = await db.claimDailyBonus(ctx.user.id);
      return result;
    }),

    // Reset credits to 500 when balance is zero
    reset: protectedProcedure.mutation(async ({ ctx }) => {
      const credits = await db.getUserCredits(ctx.user.id);
      
      if (!credits || credits.credits > 0) {
        throw new Error("Can only reset when credits are zero");
      }

      return await db.resetCredits(ctx.user.id);
    }),

    // Update credits (used internally by games)
    update: protectedProcedure
      .input(z.object({
        amount: z.number(),
        type: z.enum(['add', 'subtract']),
      }))
      .mutation(async ({ ctx, input }) => {
        return await db.updateUserCredits(ctx.user.id, input.amount, input.type);
      }),
  }),

  achievements: router({
    // Get all available achievements
    getAll: publicProcedure.query(async () => {
      return await db.getAllAchievements();
    }),

    // Get user's unlocked achievements
    getUserAchievements: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserAchievements(ctx.user.id);
    }),

    // Unlock an achievement
    unlock: protectedProcedure
      .input(z.object({
        achievementId: z.number(),
      }))
      .mutation(async ({ ctx, input }) => {
        return await db.unlockAchievement(ctx.user.id, input.achievementId);
      }),
  }),

  games: router({
    // Record a game play
    recordPlay: protectedProcedure
      .input(z.object({
        gameType: z.enum(['poker', 'slots', 'roulette', 'scratch']),
        creditsWagered: z.number(),
        creditsWon: z.number(),
        result: z.enum(['win', 'loss', 'draw']),
      }))
      .mutation(async ({ ctx, input }) => {
        // Update credits
        await db.updateUserCredits(ctx.user.id, input.creditsWagered, 'subtract');
        if (input.creditsWon > 0) {
          await db.updateUserCredits(ctx.user.id, input.creditsWon, 'add');
        }

        // Record game history
        return await db.recordGamePlay({
          userId: ctx.user.id,
          gameType: input.gameType,
          creditsWagered: input.creditsWagered,
          creditsWon: input.creditsWon,
          result: input.result,
        });
      }),

    // Get user's game history
    getHistory: protectedProcedure
      .input(z.object({
        limit: z.number().optional().default(50),
      }))
      .query(async ({ ctx, input }) => {
        return await db.getUserGameHistory(ctx.user.id, input.limit);
      }),
  }),

  leaderboard: router({
    // Get top players
    get: publicProcedure
      .input(z.object({
        limit: z.number().optional().default(100),
      }))
      .query(async ({ input }) => {
        return await db.getLeaderboard(input.limit);
      }),
  }),
});

export type AppRouter = typeof appRouter;
