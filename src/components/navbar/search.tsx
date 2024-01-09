import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-gray-200 w-48 sm:min-w-80 flex items-center gap-2 rounded-md p-2">
        <SearchIcon size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="flex-1 outline-none bg-transparent text-sm font-light line-clamp-1"
        />
      </div>
    </div>
  );
};

export default Search;
