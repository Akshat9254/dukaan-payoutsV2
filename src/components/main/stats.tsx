import Card from "@/components/main/card";
import { ChevronDownIcon } from "lucide-react";

const Stats = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h4 className="font-semibold">Overview</h4>
        <button className="flex items-center border-[1px] border-gray-400 px-2 py-1 rounded-md bg-white">
          <span className="font-light text-sm">Last Month</span>
          <ChevronDownIcon size={21} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card title="Online orders" num={231} />
        <Card title="Amount Received" num={"₹23,92,312.19"} />
      </div>
    </div>
  );
};

export default Stats;
