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
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wallets.map((wallet) => (
          <div key={wallet.walletId} className="bg-white p-4 rounded shadow">

            {/* FIXED: pass correct props */}
            <WalletCard
              title={wallet.walletName}
              value={`₹${wallet.balance}`}
            />

            {/* <input
              className="border p-2 w-full mt-3"
              placeholder="Enter amount"
              value={amounts[wallet.walletId] || ""}
              onChange={(e) =>
                setAmounts({
                  ...amounts,
                  [wallet.walletId]: e.target.value,
                })
              }
            /> */}

            {/* <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleCredit(wallet.walletId)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Credit
              </button>

              <button
                onClick={() => handleDebit(wallet.walletId)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Debit
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </MainLayout>
  );
}