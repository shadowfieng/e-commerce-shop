import { useState } from "react";
import { TPagination } from "../../types/pagination";
import Select from "../Select";

const elementsPerPage = [10, 25, 50, 75, 100];

type Props = {
  pagination?: TPagination;
  onChangeItemsPerPage: (itemsPerPage: string) => void;
};

const Pagination = ({ pagination, onChangeItemsPerPage }: Props) => {
  const { total, limit } = pagination ?? { total: 10, limit: 10 };
  const [page, setPage] = useState(1);

  const pagesCount = Math.round(total / limit);

  const pageClickHandler = (pageIndex: number) => {
    setPage(pageIndex);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <ul className="flex gap-4 ">
        {Array.from({ length: pagesCount }).map((_, index) => (
          <li
            key={index}
            onClick={() => pageClickHandler(index + 1)}
            className={` px-4 py-1 rounded-md cursor-pointer ${
              index + 1 === page ? "bg-teal-500" : "bg-slate-500"
            } hover:bg-purple-400 transition-colors`}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <Select options={elementsPerPage} onChangeOption={onChangeItemsPerPage} />
    </div>
  );
};

export default Pagination;
