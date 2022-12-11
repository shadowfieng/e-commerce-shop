import { TPagination } from "../../types/pagination";
import Select from "../Select";

const elementsPerPage = [10, 25, 50, 75, 100];

type Props = {
  pagination?: TPagination;
  onChangeItemsPerPage: (itemsPerPage: string) => void;
};

const Pagination = ({ pagination, onChangeItemsPerPage }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <ul className="flex gap-4 ">
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
    <Select options={elementsPerPage} onChangeOption={onChangeItemsPerPage} />
    </div>
  );
};

export default Pagination;
