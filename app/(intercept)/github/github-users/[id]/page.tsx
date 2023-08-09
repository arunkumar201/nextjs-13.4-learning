import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { MdLink, MdLocationOn } from "react-icons/md";

import { FiStar } from "react-icons/fi";
import { GitHubUserType } from "@/lib/types/GithubUser";
import { GrTwitter } from "react-icons/gr";
import React from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import { getGithubUser } from "@/app/_actions/getGithubUsers";

const UserProfile = async ({ params }: { params: { id: string } }) => {
  const login = params.id;
  const user: GitHubUserType = await getGithubUser(login);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container w-[30rem] text-center px-4 py-8 mx-auto mt-8 text-gray-600 bg-slate-200">
      <div className="flex items-center justify-center mb-8">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full"
        />
      </div>
      <h1 className="mb-4 text-3xl font-bold">{user.login}</h1>
      <p className="mb-6 ">
        <AiOutlineUser className="inline-block mr-1" />
        {user?.type}
      </p>
      <p className="mb-6 ">
        <AiOutlineUser className="inline-block mr-1" />
        {user?.bio}
      </p>
      <p className="mb-6 ">
        <MdLocationOn className="inline-block mr-1" />
        {user?.location}
      </p>
      <p className="mb-6 ">
        <MdLink className="inline-block mr-1" />
        <a href={user?.blog} target="_blank" rel="noopener noreferrer">
          {user?.blog}
        </a>
      </p>
      <p className="mb-6 ">
        <GrTwitter className="inline-block mr-1" />
        <a
          href={`https://twitter.com/${user?.twitter_username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user?.twitter_username}
        </a>
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <RiGitRepositoryLine className="inline-block mr-1" />
          <p className="">{user?.public_repos} repositories</p>
        </div>
        <div className="flex items-center">
          <AiOutlineUserAdd className="inline-block mr-1" />
          <p className="">{user?.followers} followers</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
