import PaginationButton from "@/components/main/pagination-button";
import { useDevice } from "@/hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const TransactionsTableFooter = () => {
  const { isMobile } = useDevice();
  return (
    <div className="w-full">
      <div className="min-h-[60px] w-full flex items-center justify-center gap-2 md:gap-4">
        <button className="flex items-center gap-1 px-2 py-1 rounded-md border-[1px] border-b-gray-300 hover:bg-gray-50">
          <ChevronLeftIcon size={14} className="text-muted-primary" />
          <span className="hidden sm:block text-sm text-muted-primary font-light">
            Previous
          </span>
        </button>
        <PaginationButton num={1} />
        <PaginationButton num={"..."} />
        {[...Array(isMobile ? 5 : 9).fill(0)].map((_, index) => (
          <PaginationButton
            key={index}
            num={index + 10}
            selected={index + 10 === 10}
          />
        ))}
        <button className="flex items-center gap-1 px-2 py-1 rounded-md border-[1px] border-b-gray-300 hover:bg-gray-50">
          <span className="hidden sm:block text-sm text-muted-primary font-light">
            Next
          </span>
          <ChevronRightIcon size={14} className="text-muted-primary" />
        </button>
      </div>
    </div>
  );
};

export default TransactionsTableFooter;
