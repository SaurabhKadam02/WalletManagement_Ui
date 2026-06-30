import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import WalletTable from "../components/WalletTable";
import { walletService } from "../services/walletService";

export default function WalletPage() {
  const navigate = useNavigate();
  const [wallets, setWallets] = useState([]);

  const loadWallets = async () => {
    try {
      const res = await walletService.getWallets();
      setWallets(res.data);
    } catch (err) {
      console.error("Error loading wallets:", err);
    }
  };

  useEffect(() => {
    loadWallets();
  }, []);

  return (
    <MainLayout>
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Wallets</h1>

        <button
          className="bg-blue-900 text-white px-5 py-3 rounded-lg"
          onClick={() => navigate("/wallets/create")} > Create Wallet
        </button>
      </div>
      <WalletTable wallets={wallets} refresh={loadWallets} />
    </MainLayout>
  );
}