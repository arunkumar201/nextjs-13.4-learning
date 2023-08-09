interface Comment {
  id: number;
  name: string;
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
      <h1 className="fixed w-1/2 mb-4 text-2xl font-bold bg-gray-400">Comments Page</h1>
      <div className="container h-[28rem] mt-8 mx-auto overflow-auto">
        <ul>
          {data &&
            data.map((comment: Comment) => (
              <li key={comment.id} className="mb-2">
                <strong>{comment.name}</strong>
                <p>{comment.body}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
