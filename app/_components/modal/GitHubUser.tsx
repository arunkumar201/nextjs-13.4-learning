"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import { Button } from "@/components/ui/button";
import { GitHubUserType } from "@/lib/types/GithubUser";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GitHubUser = ({ user }: { user: GitHubUserType }) => {
  const route = useRouter();
  return (
    <>
      <Dialog onOpenChange={() => route.back()} defaultOpen={true}>
        <DialogContent className="px-6 py-4">
          <DialogHeader className="p-2">
            <DialogTitle className="text-2xl font-medium text-center text-green-400">
              {user?.login}
            </DialogTitle>
            <DialogDescription className="flex items-center mt-2 space-x-2">
              <Image
                src={user?.avatar_url}
                alt={user?.login}
                className="w-40 h-40 rounded-full"
                width={400}
                height={400}
              />
              <div className="flex flex-col font-semibold">
                <p className="text-xl text-yellow-500 "> Name: {user?.login}</p>
                <p className="text-sm text-gray-500">
                  Profile Url: {user?.html_url}
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="font-medium text-gray-700">Followers URL:</p>
            <p className="text-gray-500">{user?.followers_url}</p>
            <p className="mt-2 font-medium text-gray-700">Following URL:</p>
            <p className="text-gray-500">{user?.following_url}</p>
            <p className="mt-2 font-medium text-gray-700">Organizations URL:</p>
            <p className="text-gray-500">{user?.organizations_url}</p>
            <p className="mt-2 font-medium text-gray-700">Repos URL:</p>
            <p className="text-gray-500">{user?.repos_url}</p>
          </div>
          <DialogFooter className="flex mt-10 text-center">
            <div className="flex justify-around w-full p-3 space-x-4">
              <a
                href={user.html_url}
                className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
              <a
                href={user.repos_url}
                className="px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repositories
              </a>
            <Button type="submit" className="mr-3">Confirm</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GitHubUser;
