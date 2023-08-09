// Error components must be Client components
'use client';

const FileHint = ({ fileName }: { fileName: string; }) => <code className="text-xs font-light opacity-40">{fileName}</code>;

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 p-2 bg-blue-800 rounded-xl">
      <div className="self-end">
        <FileHint fileName="app/jsonplaceholders/@posts/error.tsx" />
      </div>
      <div>
        <h2>Posts Error Handler - Something went wrong!</h2>
        <p>Error details:</p>
        <pre className="whitespace-pre">{error.message}</pre>
      </div>
      <button className="border px-[1em] py-[0.5em]" onClick={() => reset()}>
        Reload Posts
      </button>
    </div>
  );
}
