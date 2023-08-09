export default function RootParallelLayout(props: {
  children: React.ReactNode;
  githubuser: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      {props.children}
      {props.githubuser}
    </div>
  );
}
