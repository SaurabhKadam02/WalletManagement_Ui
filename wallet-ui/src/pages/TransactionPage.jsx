import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TransactionTable from "../components/TransactionTable";
import { transactionService } from "../services/transactionService";

export default function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await transactionService.getTransactions();
      setTransactions(res.data);

    } catch (err) {
      setError("Failed to load transactions");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-8">
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

      {loading && (
        <p className="text-gray-600">Loading transactions...</p>
      )}

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {!loading && !error && (
        <TransactionTable transactions={transactions} />
      )}
    </MainLayout>
  );
} 