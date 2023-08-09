interface Post {
  id: number;
  title: string;
  body: string;
}
async function wait() {
  await new Promise((res) => {
    setTimeout(res, 5000);
  });
}

const Page: React.FC = async () => {
  await wait();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <>
      <h1 className="fixed w-1/2 mb-4 text-2xl font-bold bg-gray-400">Posts Page</h1>
      <div className="container mx-auto">
        <div className="container h-[28rem] mt-8 mx-auto overflow-auto">
          <ul>
            {data &&
              data.map((post:any) => (
                <li key={post.id} className="mb-4">
                  <h2 className="mb-2 text-lg font-bold">{post.title}</h2>
                  <p>{post.body}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
