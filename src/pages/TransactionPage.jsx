import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TransactionTable from "../components/TransactionTable";
import { transactionService } from "../services/transactionService";

export default function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [page, setPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);
  const loadTransactions = async () => {
    try {
      setLoading(true);
      setError(null);
const res = await transactionService.getTransactions(page, 8);

setTransactions(res.data.content);
setTotalPages(res.data.totalPages);

    } catch (err) {
      setError("Failed to load transactions");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  loadTransactions();
}, [page]);

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
      <>
        <TransactionTable transactions={transactions} />

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">

          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-semibold">
            Page {page + 1} of {totalPages}
          </span>

          <button
            disabled={page + 1 >= totalPages}
            onClick={() => setPage(page + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>

        </div>
      </>
    )}
  </MainLayout>
);
}