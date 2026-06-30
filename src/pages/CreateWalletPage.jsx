import { useState } from "react";
import { walletService } from "../services/walletService";
import { useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

export default function CreateWalletPage() {
  const [walletName, setWalletName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!walletName.trim()) {
      alert("Please enter a wallet name.");
      return;
    }

    try {
      await walletService.createWallet({ walletName });
      navigate("/wallets");
    } catch (err) {
      console.error(err);
      alert("Failed to create wallet.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-100 p-4 rounded-full">
            <FaWallet className="text-blue-700 text-4xl" />
          </div>

          <h1 className="text-3xl font-bold text-blue-900 mt-4">
            Create Wallet
          </h1>

          <p className="text-gray-500 mt-2 text-center">
            Create a new wallet to manage your money.
          </p>

        </div>

        <div className="mb-6">

          <label className="block text-gray-700 font-medium mb-2">
            Wallet Name
          </label>

          <input
            type="text"
            placeholder="Enter wallet name"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300 shadow-lg"
        >
          Create Wallet
        </button>

        <button
          onClick={() => navigate("/wallets")}
          className="w-full mt-4 border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
        >
          Back to Wallets
        </button>

      </div>

    </div>
  );
}