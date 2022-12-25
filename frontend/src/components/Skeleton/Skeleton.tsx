import React from "react";
type Props = {
  count: number;
};

const Skeleton = ({ count }: Props) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-slate-300 p-3 flex flex-col gap-2 rounded-lg shadow-lg animate-pulse"
        >
          <div className="w-full bg-gray-400 h-10 rounded-md"></div>
          <div className="w-full bg-gray-400 h-20 rounded-md"></div>
          <div className="w-36 bg-gray-400 h-6 rounded-md "></div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
