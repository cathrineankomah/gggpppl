import { z } from "zod";
// import { auth } from "@clerk/nextjs/server";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { taskCompletions, tasks } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";
import {type TaskProps } from "@/components/dashboard/tasks-page";
import { auth } from "@clerk/nextjs/server";
export const taskRouter = createTRPCRouter({

    getTasks: publicProcedure.query(async ({ ctx }) => {
        const allTasks = await ctx.db.query.tasks.findMany({
            orderBy: desc(tasks.createdAt)
        })

        return allTasks  as TaskProps[]
    }),

    getSingleTask: publicProcedure.input(z.object({
        id:z.number()
    })).query(async ({ ctx, input }) => {
        const singleTask = await ctx.db.query.tasks.findFirst({
            where: eq(tasks.id, input.id)
        })

        return singleTask as TaskProps
    }),

    submitTask: publicProcedure.input(z.object({
        id:z.number(),
        submissionData:z.string()
    })).mutation(async({ctx,input})=>{
    await ctx.db.insert(taskCompletions).values({
            taskId:input.id,
            userId: auth().userId + "",
            status:'pending',
            submissionData:input.submissionData,

        })
    }),

    startTask: publicProcedure
    .input(z.object({
        id:z.number()
    }))
    .query(async({ctx,input})=>{
        await ctx.db.insert(taskCompletions).values({
            taskId:input.id,
            userId: auth().userId + "",
            status:'pending',
            submissionData:'',

        })

        const singleTask = await ctx.db.query.tasks.findFirst({
            where: eq(tasks.id, input.id)
        })
        return singleTask
    })
})