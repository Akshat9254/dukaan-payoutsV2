type PropTypes = {
  id: string;
  date: string;
  amount: string;
  transactionFees: string;
};

const TransactionsTableRow = ({
  id,
  date,
  amount,
  transactionFees,
}: PropTypes) => {
  return (
    <tr className="text-sm p-2 border-b border-gray-100 hover:bg-gray-50">
      <td className="p-2 text-[#3D7CAC] hover:text-blue-600 hover:underline cursor-pointer">
        {id}
      </td>
      <td className="p-2 text-center">{date}</td>
      <td className="p-2 text-center">{amount}</td>
      <td className="p-2 text-right">{transactionFees}</td>
    </tr>
  );
};

export default TransactionsTableRow;
