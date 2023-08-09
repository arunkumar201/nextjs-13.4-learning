import React from "react";
export async function wait() {
    await new Promise((res) => {
      setTimeout(res, 5000);
    });
  }
  
const Main = async () => {
    await wait();
  return <div>Main Root page</div>;
};

export default Main;
