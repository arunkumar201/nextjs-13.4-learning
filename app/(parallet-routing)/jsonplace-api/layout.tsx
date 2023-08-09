export default function RootParallelLayout(props: {
    children: React.ReactNode;
    comments: React.ReactNode;
    posts: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col text-center ">
        <div className="flex-grow h-[24rem]">
          {props.children}
        </div>
        <div className="flex w-full h-full">
          <div className="w-1/2 border border-gray-300 shadow-md h-[30rem]">
            {props.comments}
          </div>
          <div className="w-1/2 border border-gray-300 shadow-md h-[30rem]">
            {props.posts}
          </div>
        </div>
      </div>
    );
  }