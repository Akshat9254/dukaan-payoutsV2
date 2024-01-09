import { storeLogo } from "@/assets/images";
import { ChevronDownIcon } from "lucide-react";

const SidebarTop = () => {
  return (
    <div className="h-10 flex items-center w-full gap-2">
      <figure className="h-10">
        <img
          src={storeLogo}
          alt="store-logo"
          className="rounded-md aspect-square h-full"
        />
      </figure>
      <div className="flex-1 flex flex-col items-start justify-evenly">
        <h4>Nishyan</h4>
        <p className="text-gray-400 underline underline-offset-4 cursor-pointer text-xs font-light">
          Visit store
        </p>
      </div>
      <button className="flex items-center">
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default SidebarTop;
