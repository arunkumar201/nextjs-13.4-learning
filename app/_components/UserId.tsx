'use client'

import { GitHubUserType } from "@/lib/types/GithubUser";
import Link from "next/link";
import { useEffect } from "react";

const UserId = ({ user }: { user: GitHubUserType }) => {
  useEffect(() => {
    if (!user) {
      console.error("Something went wrong");
    }
  }, [user]);

  if (!user) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <Link href={`/github/github-users/${user.login}`}>
        <p className="block mt-1 font-medium leading-tight text-black hover:underline" rel="noopener noreferrer">
          {user.login}
        </p>
      </Link>
    </>
  );
};

export default UserId;