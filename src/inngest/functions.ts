// src/inngest/functions.ts
import prisma from "@/lib/db";
import { inngest } from "./client";

export const processTask = inngest.createFunction(
  { id: "process-task", triggers: { event: "app/task.created" }, retries: 5 },
  async ({ event, step }) => {
    const result = await step.run("handle-task", async () => {
      return { processed: true, id: event.data.id };
    });

    // Fetching the video
    await step.sleep("waiting-a-moment", "5s");

    // Transcribing
    await step.sleep("waiting-a-momment", "5s");

    // Seding transciption to AI
    await step.sleep("waiting", "5s");

    await step.run("created-workflow", () => {
        return prisma.workflow.create({
            data: {
                name: "workflow-from-inngest!"
            }
        })
    });

    // return { message: `Task ${event.data.id} complete`, result };
  }
);