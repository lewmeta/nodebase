import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Image from "next/image";

export default async function Home() {

  const users = await prisma.user.findFirst();
  console.log(users);
  return (
    <div>
      <Button variant={'ghost'}>{users?.name}</Button>
    </div>
  );
}
