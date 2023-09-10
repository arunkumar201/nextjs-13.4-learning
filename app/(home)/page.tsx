"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "../_components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const route = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      route.push("/");
    },
  });
  return (
    <>
      <div className="absolute justify-center w-full h-full mt-4">
        <h1 className="text-3xl font-extrabold text-center text-gray-300 text-muted-foreground">
          Welcome to Out Next Auth Application
        </h1>
        <div className="mt-4 text-center">
          {status !== "authenticated" ? (
            <Button
              variant={"secondary"}
              className="p-4 text-xl"
              onClick={() => signIn(undefined, { callbackUrl: "/user" })}
            >
              Sign In
            </Button>
          ) : (
            <Button
              variant={"secondary"}
              className="p-5 text-xl"
              onClick={() => signOut}
            >
              Sign-Out
            </Button>
          )}
        </div>
      </div>
      <Link href={'/myscroll'} scroll={false}>Go to Home</Link>
      
      <Link href={'/scroll'} scroll={false}>Go to Home</Link>
      
    </>
  );
};
export default HomePage;
