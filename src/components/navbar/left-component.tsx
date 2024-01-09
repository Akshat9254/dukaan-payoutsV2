import { useDrawer } from "@/hooks";
import { HelpCircleIcon, MenuIcon } from "lucide-react";

const LeftComponent = () => {
  const { toggleDrawer } = useDrawer();
  return (
    <div className="flex gap-4">
      <MenuIcon
        className="block lg:hidden cursor-pointer"
        onClick={toggleDrawer}
      />
      <h6 className="font-light hidden md:block">Payments</h6>
      <div className="hidden md:flex items-center gap-1">
        <HelpCircleIcon
          size={14}
          className="font-extralight"
          strokeWidth={1.2}
        />
        <p className="font-extralight text-sm">How it works</p>
      </div>
    </div>
  );
};

export default LeftComponent;
