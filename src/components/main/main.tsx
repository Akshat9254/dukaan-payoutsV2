import Stats from "@/components/main/stats";
import Transactions from "@/components/main/transactions";

const Main = () => {
  return (
    <div className="bg-gray-50 h-full w-full p-6 flex flex-col gap-6">
      <Stats />
      <Transactions />
    </div>
  );
};

export default Main;
