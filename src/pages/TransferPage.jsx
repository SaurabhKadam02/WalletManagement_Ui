import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TransactionTable from "../components/TransactionTable";
import { transactionService } from "../services/transactionService";

export default function TransactionPage() {

  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
    try {
      const res = await transactionService.getTransactions(0, 5);

      setTransactions(res.data.content);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <MainLayout>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900">
          Transaction History
        </h1>

        <button
          onClick={loadTransactions}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Refresh
        </button>

      </div>

      <TransactionTable transactions={transactions} />

    </MainLayout>
  );
}