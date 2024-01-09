import TransactionTableHeader from "@/components/main/transaction-table-header";
import TransactionsTableFooter from "@/components/main/transactions-table-footer";
import TransactionsTableRow from "@/components/main/transactions-table-row";
import { transactions } from "@/constants";

const TransactionsTable = () => {
  return (
    <>
      <table className="w-full table-fixed">
        <colgroup>
          <col className="w-1/4" />
          <col className="w-1/4" />
          <col className="w-1/4" />
          <col className="w-1/4" />
        </colgroup>
        <thead className="!rounded-md">
          <TransactionTableHeader />
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <TransactionsTableRow key={index} {...txn} />
          ))}
        </tbody>
      </table>
      <div className="h-[60px] col-span-4 flex">
        <TransactionsTableFooter />
      </div>
    </>
  );
};

export default TransactionsTable;
