import TransactionTableOptions from "@/components/main/transaction-table-options";
import TransactionsTable from "@/components/main/transactions-table";

const Transactions = () => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <h4 className="font-semibold">Transactions | This Month</h4>
      <div className="flex-1 rounded-lg shadow-md bg-white flex flex-col gap-2 p-3">
        <TransactionTableOptions />
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;
