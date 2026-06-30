import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import WalletCard from "../components/WalletCard";

import {
  getWallets,
  creditWallet,
  debitWallet
} from "../services/walletService";

export default function DashboardPage() {
  const [wallets, setWallets] = useState([]);
  const [amounts, setAmounts] = useState({});

  // ✅ Load wallets
  const loadWallets = async () => {
    try {
      const res = await getWallets();
      setWallets(res.data);
    } catch (err) {
      console.error("Error loading wallets:", err);
    }
  };

  useEffect(() => {
    loadWallets();
  }, []);

  // 💰 Credit
  const handleCredit = async (id) => {
    const amount = amounts[id];
    if (!amount) return;

    try {
      await creditWallet(id, Number(amount));
      setAmounts({ ...amounts, [id]: "" });
      loadWallets();
    } catch (err) {
      console.error("Credit failed:", err);
    }
  };

  // 💸 Debit
  const handleDebit = async (id) => {
    const amount = amounts[id];
    if (!amount) return;

    try {
      await debitWallet(id, Number(amount));
      setAmounts({ ...amounts, [id]: "" });
      loadWallets();
    } catch (err) {
      console.error("Debit failed:", err);
    }
  };

  return (
  <MainLayout>
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-blue-900">
        Dashboard
      </h1>
      <p className="text-gray-500 mt-2">
        View and manage all your wallets
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {wallets.map((wallet) => (
        <div
          key={wallet.walletId}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >

          <WalletCard
            title={wallet.walletName}
            wallet_id={wallet.walletId}
            value={`₹${wallet.balance}`}
          />

          {/* <div className="mt-6 border-t pt-4">

            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Status</span>
              <span className="font-semibold text-green-600">
                {wallet.status}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>Owner</span>
              <span className="font-semibold text-gray-700">
                {wallet.customer?.name}
              </span>
            </div>

          </div> */}

        </div>
      ))}

    </div>
  </MainLayout>
);
}