interface Post {
  id: number;
  title: string;
  body: string;
}
async function wait() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
const Page = async () => {
  await wait();
  return (
    <>
      <div className="container mx-auto">
        <div className="container h-[28rem] mt-8 mx-auto overflow-auto">
          <ul>
            <h1>Hello I am Comments component</h1>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
