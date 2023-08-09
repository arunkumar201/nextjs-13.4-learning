import { GitHubUserType } from "@/lib/types/GithubUser";
import React from "react";
import UserId from "./UserId";

type UserCardProps = {
  user: GitHubUserType;
};
const GithubUserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex flex-col h-23 flex-wrap w-[15rem] overflow-hidden bg-slate-300 text-gray-500 shadow-md rounded-xl md:max-w-2xl text-start">
      <div className="flex flex-col p-4 text-xl">
        <div className="md:flex-shrink-0">
          <img
            className="object-cover w-full h-48 md:h-full"
            src={user.avatar_url}
            alt={user.login}
          />
        </div>
        <div className="p-8">
          <div className="font-semibold tracking-wide text-indigo-500 uppercase">
            GitHub User
          </div>
         <UserId user={user}/>
        </div>
      </div>
    </div>
  );
};

export default GithubUserCard;
