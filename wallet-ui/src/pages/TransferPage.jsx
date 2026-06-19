import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TransactionTable from "../components/TransactionTable";
import { transactionService } from "../services/transactionService";

export default function TransactionPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionService.getTransactions()
      .then((res) => setTransactions(res.data))
      .catch(console.error);
  }, []);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Transaction History
      </h1>

      <TransactionTable transactions={transactions} />
    </MainLayout>
  );
}