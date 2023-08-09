'use server'
export async function getUsers() {
  try {
    const res = await fetch("http://localhost:3000/api/registered-users");
    const users = await res.json();
    return users.data;
  } catch (error) {
    console.log("🚀 ~ file: getUsers.ts:12 ~ getUsers ~ error:", error)
    return new Error("Something went wrong when fetching");
  }
}
