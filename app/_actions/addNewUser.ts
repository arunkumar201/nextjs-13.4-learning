'use server'

import { Account, User as NextAuthUser } from "next-auth";

import User from "@/models/users.model";

interface IAddNewUser {
  account: Account | null;
  user: NextAuthUser;
}

export async function addNewUser({ account, user }: IAddNewUser) {
  console.log("🚀 ~ file: addNewUser.ts:12 ~ addNewUser ~ account:", account);
  const newUser = new User({
    userName: user.name,
    email: user.email,
    provider: account?.provider || "",
    password: "",
    id: user.id,
    name: user.name,
    image: user.image,
    account: {
      provider: account?.provider || "",
      type: account?.type || "",
      providerAccountId: account?.providerAccountId || "",
      access_token: account?.access_token || "",
      token_type: account?.tokenType || "",
      scope: account?.scope || "",
    },
  });

  try {
    await newUser.save();
    console.log("User saved successfully");
  } catch (error) {
    console.error("Error saving user:", error);
  }
}

//isValidUser-already exists
export async function isUserExists(
  email: string | null | undefined,
  provider: string | null | undefined
): Promise<boolean> {
  if (
    email === undefined ||
    email === null ||
    provider === undefined ||
    provider === null
  ) {
    return false;
  }
  const user = await User.findOne({ email: email, provider })
    .select("email")
    .lean();
  if (!user) {
    return false;
  }
  return true;
}
//update the user
export async function updateUser(
  email: string | null | undefined,
  provider: string | null | undefined,
  token: string | null | undefined
) {
    const newUser = await User.findOneAndUpdate(
        { email, provider },
        { $set: {'account.access_token': token } },
      );
  if (newUser) {
    return {
      message: "Access Token successfully Updated",
      updated: true,
    };
  }
}
