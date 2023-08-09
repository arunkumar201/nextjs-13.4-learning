import GitHubUser from "@/app/_components/modal/GitHubUser";
import { GitHubUserType } from "@/lib/types/GithubUser";
import React from "react";
import { getGithubUsers } from "@/app/_actions/getGithubUsers";

const page = async ({ params }: { params: { id: string } }) => {
  const login = params.id;
  console.log("🚀 ~ file: page.tsx:8 ~ page ~ login:", login)
  const users: GitHubUserType[] = await getGithubUsers();
const user: GitHubUserType | undefined = users.find((user: GitHubUserType) => user?.login === login);
  return (
    <>
      <GitHubUser user={user!} />
    </>
  );
};

export default page;
