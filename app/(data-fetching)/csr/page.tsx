"use client";

//Fetching data in client side
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  if (loading) {
    return <p className="text-3xl text-center">Loading...</p>;
  }
  if (error) {
    throw new Error("Something went Wrong");
  }
  //function to get the data from the server/api
  const getUserData = async () => {
    try {
      setLoading(true);
      'use server'
      const response = await fetch("/api/registered-users", {
        cache: "no-cache",
      });
      true;
      const users = await response.json();
      setData(users?.data);
    } catch (error) {
      console.log("🚀 ~ file: page.tsx:27 ~ getUserData ~ error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <Button variant={"secondary"} size={"lg"} onClick={getUserData}>
          getUserData
        </Button>
        <br/>
        {data &&
          data?.map((user: any) => {
            return (
              <div className="w-1/2 m-10" key={user._id}>
                <h1> Name:{user.userName}</h1>
                <p>Email: {user.email}</p>
                <p>Auth Provider:{user.provider}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default page;
