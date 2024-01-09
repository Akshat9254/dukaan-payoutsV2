import { twMerge } from "tailwind-merge";

type PropTypes = {
  num: number | string;
  selected?: boolean;
};

const PaginationButton = ({ num, selected = false }: PropTypes) => {
  return (
    <button
      className={twMerge(
        "aspect-square p-1 text-xs rounded-md",
        selected && "bg-[#1570B2] text-white",
        !selected && "hover:bg-blue-100"
      )}
    >
      {num}
    </button>
  );
};

export default PaginationButton;
