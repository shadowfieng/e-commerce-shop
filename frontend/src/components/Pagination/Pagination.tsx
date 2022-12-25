import { TPagination } from "../../types/pagination";
import Select from "../Select";

const elementsPerPage = [10, 25, 50, 75, 100];

const initialPagination: TPagination = {
  total: 10,
  limit: 10,
  page: 1,
  pagesCount: 1,
};

type Props = {
  pagination?: TPagination;
  loading: boolean;
  onChangeItemsPerPage: (itemsPerPage: string) => void;
  onChangePage: (newPage: number) => void;
};

const Pagination = ({
  pagination,
  loading,
  onChangeItemsPerPage,
  onChangePage,
}: Props) => {
  const { page, pagesCount } = pagination ?? initialPagination;

  const pageClickHandler = (pageIndex: number) => {
    if (loading) return;
    onChangePage(pageIndex);
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
