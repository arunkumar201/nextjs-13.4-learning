import GitHubUser from "@/app/_components/modal/GitHubUser";
import { GitHubUserType } from "@/lib/types/GithubUser";
import React from "react";
import { getGithubUsers } from "@/app/_actions/getGithubUsers";

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const users: GitHubUserType[] = await getGithubUsers();
  const user: any = users.find((user: any) => user.id == id);
  return (
    <>
      <GitHubUser user={user} />
    </>
  );
};

export default page;
