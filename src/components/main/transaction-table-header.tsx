import { ChevronDownIcon, InfoIcon } from "lucide-react";

const TransactionTableHeader = () => {
  return (
    <tr className="text-sm bg-gray-200">
      <th className="p-2 font-light text-left">Order ID</th>
      <th className="p-2 flex items-center justify-center gap-1 font-light">
        Order date <ChevronDownIcon size={16} strokeWidth={1} />
      </th>
      <th className="p-2 font-light">Order amount</th>
      <th className="p-2 flex items-center justify-end gap-1 font-light">
        Transaction fees <InfoIcon size={16} strokeWidth={1} />
      </th>
    </tr>
  );
};

export default TransactionTableHeader;
