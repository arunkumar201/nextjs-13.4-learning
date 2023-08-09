import { Button } from "@/components/ui/button";
import React, {  } from "react";
//Fetching data in client side
import { getUsers } from "@/app/_actions/getUsers";

const page = async () => {
   
//   if (loading) {
//     return <p className="text-3xl text-center">Loading...</p>;
//   }
//   if (error) {
//     throw new Error("Something went Wrong");
//   }
  //function to get the data from the server/api in Server components
    const data =await getUsers() || [];
    console.log("🚀 ~ file: page.tsx:16 ~ page ~ data:", data)
  return (
    <>
      <div className="flex justify-center w-full">
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
