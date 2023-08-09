import { GitHubUserType } from "@/lib/types/GithubUser";
import GithubUserCard from "@/app/_components/GithubUserCard";
import { getGithubUsers } from "@/app/_actions/getGithubUsers";

const page = async () => {
  const user: GitHubUserType[] = await getGithubUsers();
  if (!user) return <p>loading...</p>;
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-4 p-4">
        {user &&
          user.map((user: GitHubUserType) => {
            return (
              <div key={user.id}>
                <GithubUserCard user={user} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default page;
