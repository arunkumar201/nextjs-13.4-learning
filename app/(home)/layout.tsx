const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="box-content relative w-full min-h-screen p-0 m-0 bg-gray-700">
        {children}
      </div>
    </>
  );
};
export default HomeLayout;
