import { ChevronDownIcon, MessageSquareMoreIcon } from "lucide-react";

const RightComponent = () => {
  return (
    <div className="flex items-center gap-1 md:gap-2 lg:gap-4">
      <button className="bg-gray-200 rounded-full p-2">
        <MessageSquareMoreIcon className="text-gray-800" size={20} />
      </button>
      <button className="bg-gray-200 rounded-full p-2">
        <ChevronDownIcon className="text-gray-800" size={20} />
      </button>
    </div>
  );
};

export default RightComponent;
