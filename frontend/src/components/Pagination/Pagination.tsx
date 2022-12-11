import React from "react";

const Pagination = () => {
  return (
    <ul className="flex gap-4 mt-4 justify-center">
      <li className="bg-slate-500 px-4 py-1 rounded-md cursor-pointer active:bg-teal-500 hover:bg-purple-400 transition-colors">
        1
      </li>
      <li className="bg-slate-500 px-4 py-1 rounded-md cursor-pointer active:bg-teal-500 hover:bg-purple-400 transition-colors">
        2
      </li>
      <li className="bg-slate-500 px-4 py-1 rounded-md cursor-pointer active:bg-teal-500 hover:bg-purple-400 transition-colors">
        3
      </li>
    </ul>
  );
};

export default Pagination;
