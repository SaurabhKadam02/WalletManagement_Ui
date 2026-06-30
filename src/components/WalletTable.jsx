import { walletService } from "../services/walletService";

export default function WalletTable({ wallets = [], refresh }) {

  const handleCredit = async (walletId) => {
    const amount = prompt("Enter credit amount:");
    if (!amount) return;

    try {
      await walletService.creditWallet(
        walletId,
        Number(amount)
      );
alert("Amount debited successfully");

      refresh?.();
    } catch (err) {
      console.error("Credit failed:", err);
      alert("Credit failed");
    }
  };

  const handleDebit = async (walletId) => {
    console.log("Debit Wallet ID:", walletId);

    const amount = prompt("Enter debit amount:");
    if (!amount) return;

    try {
      await walletService.debitWallet(
        walletId,
        Number(amount)
      );
alert("Amount debited successfully");
      refresh?.();
    } catch (err) {
      console.error("Debit failed:", err);
      alert("Debit failed");
    }
  };

  return (
    <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">

      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="p-4">Wallet Name</th>
          <th className="p-4">Balance</th>
          <th className="p-4">Actions</th>
        </tr>
      </thead>

      <tbody>
        {wallets.length === 0 ? (
          <tr>
            <td colSpan="3" className="p-6 text-center text-gray-500">
              No wallets found
            </td>
          </tr>
        ) : (
          wallets.map((wallet) => (
            <tr key={wallet.walletId} className="border-b">

              <td className="p-4 font-medium">
                {wallet.walletName}
              </td>

              <td className="p-4">
                ₹{wallet.balance}
              </td>

              <td className="p-4 space-x-3">

                <button
                  onClick={() => handleCredit(wallet.walletId)}
                  className="bg-green-500 px-3 py-2 text-white rounded"
                >
                  Credit
                </button>

                <button
                  onClick={() => handleDebit(wallet.walletId)}
                  className="bg-red-500 px-3 py-2 text-white rounded"
                >
                  Debit
                </button>

              </td>

            </tr>
          ))
        )}
      </tbody>

    </table>
  );
}