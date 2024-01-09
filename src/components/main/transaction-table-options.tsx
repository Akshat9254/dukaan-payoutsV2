import { ArrowDownUpIcon, DownloadIcon, SearchIcon } from "lucide-react";

const TransactionTableOptions = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div className="flex gap-1 items-center px-2 py-1 border-2 border-gray-200 rounded-md w-full md:w-64">
        <SearchIcon size={16} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by Order ID..."
          className="outline-none bg-transparent font-light text-sm"
        />
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-1 px-2 py-1 rounded-md border-[1px] border-b-gray-300 hover:bg-gray-50">
          <span className="text-sm text-muted-primary font-light">Sort</span>
          <ArrowDownUpIcon size={14} className="text-muted-primary" />
        </button>
        <button className="flex items-center aspect-square gap-1 px-2 py-1 rounded-md border-[1px] border-b-gray-300 hover:bg-gray-50">
          <DownloadIcon size={14} className="text-muted-primary" />
        </button>
      </div>
    </div>
  );
};

export default TransactionTableOptions;
