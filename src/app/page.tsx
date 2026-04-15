import { Button } from "@/components/ui/button";
// import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { Logout } from "./(auth)/logout";

const Page = async () => {
  await requireAuth();
  
  // const { data } = authClient.useSession();
  const data = await caller.getUsers();

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      {JSON.stringify(data)}

      {data && (
          <Logout />
      )}
    </div>
  );
}

export default Page;
