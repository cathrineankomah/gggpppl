import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { users, activities, taskCompletions } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";
export const userRouter = createTRPCRouter({
  // getUser: publicProcedure
  //   .input(z.object({ id: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     await ctx.db.insert(posts).values({
  //       name: input.name,
  //     });
  //   }),

  getUser: publicProcedure.query(async ({ ctx }) => {
    const id = auth().userId ?? ""
    const user = await ctx.db.query.users.findFirst({
      where: eq(users.id, id)
    })

    return user ?? null;
  }),

  verifyReferralCode: publicProcedure.input(z.object({ referralCode: z.string() })).query(async ({ ctx, input }) => {
    const user = await ctx.db.query.users.findFirst({
      where: eq(users.referralCode, input.referralCode)
    })

    return user ?? null;
  }),

  getActivities: publicProcedure.query(async ({ ctx }) => {
    const id = auth().userId ?? ""
    const userActivities = await ctx.db.query.activities.findMany({
      where: eq(activities.userId, id),
      limit: 10,
      orderBy: desc(activities.createdAt)
    })

    return userActivities ?? null;
  }),

  addActivity: publicProcedure.input(z.object({ 
    type: z.enum(['user', 'task', 'game', 'raffle', 'invest', 'transaction']), 
    action: z.string(), 
    details: z.string() }))
    .mutation(async ({ ctx, input }) => {
    const id = auth().userId ?? ""
    await ctx.db.insert(activities).values({
      userId: id,
      type: input.type,
      action: input.action,
      details: input.details
    })
  }),

  getUserStats: publicProcedure.query(async ({ ctx }) => {
    const id = auth().userId ?? ""
    const user = await ctx.db.query.users.findFirst({
      where: eq(users.id, id)
    })

    const userTasks = await ctx.db.query.taskCompletions.findMany({
      where: eq(activities.userId, id),
    })


    const userStats = {
      tasksDone: userTasks.length,
      gamesHours: 0,
      gainsEarned: user?.gains ?? 0,
      currentBalance: user?.cash ?? 0,
    }
    return userStats ?? null;
  }),

  getUserTasks: publicProcedure.query(async ({ ctx }) => {
    const id = auth().userId ?? ""
    const userTasks = await ctx.db.query.taskCompletions.findMany({
      where: eq(taskCompletions.userId, id),
    })

    return userTasks ?? null;
  }),
});
