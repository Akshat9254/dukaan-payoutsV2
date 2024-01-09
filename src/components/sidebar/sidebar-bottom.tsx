import { WalletIcon } from "lucide-react";

const SidebarBottom = () => {
  return (
    <div className="rounded-md bg-muted-primary m-1 mt-auto flex items-center gap-2 p-2 cursor-pointer hover:bg-muted-primary/75">
      <WalletIcon size={24} />
      <div className="flex flex-col">
        <span className="font-extralight text-xs">Available Credits</span>
        <p>222.0</p>
      </div>
    </div>
  );
};

export default SidebarBottom;
