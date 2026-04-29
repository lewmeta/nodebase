import { inngest } from "@/inngest/client";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";

export const appRouter = createTRPCRouter({
  getWorkflows: baseProcedure.query((ctx) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: baseProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "lewis@mail.com",
      },
    });

    return { success: true, message: "Job queued" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
