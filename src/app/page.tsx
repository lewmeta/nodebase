"use client";

import { Button } from "@/components/ui/button";
// import { requireAuth } from "@/lib/auth-utils";
// import { caller } from "@/trpc/server";
import { Logout } from "./(auth)/logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Page =  () => {

  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      // queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
      toast.success("Job queued");
    }
  }))

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      {JSON.stringify(data, null,2)}

      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create workflow
      </Button>
    </div>
  );
}

export default Page;
