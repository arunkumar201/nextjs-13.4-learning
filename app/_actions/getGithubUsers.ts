"use server";
export async function getGithubUser(id:string) {
  try {
    const res = await fetch(`https://api.github.com/users/${id}`, {
      cache: "force-cache",
      method: "GET",
      headers: {
        Authorization: process.env.GITHUB_TOKEN!,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return new Error("Something went wrong,please try again");
  }
}

export async function getGithubUsers() {
  try {
    const res = await fetch("https://api.github.com/users", {
      cache: "force-cache",
      method: "GET",
      headers: {
        Authorization: process.env.GITHUB_TOKEN!,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return new Error("Something went wrong,please try again");
  }
}
