import { useState } from "react";
import { walletService } from "../services/walletService";
import { useNavigate } from "react-router-dom";

export default function CreateWalletPage() {

  const [walletName, setWalletName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await walletService.createWallet({ walletName });
    navigate("/wallets");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Wallet</h1>

      <input
        type="text"
        placeholder="Wallet Name"
        value={walletName}
        onChange={(e) => setWalletName(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Wallet
      </button>
    </div>
  );
}