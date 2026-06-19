export default function TransactionTable({ transactions }) {

  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white p-6 rounded shadow text-center text-gray-500">
        No transactions found
      </div>
    );
  }

  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Transaction ID</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Wallet ID</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn) => (
            <tr
              key={txn.txnId}
              className="border-b hover:bg-gray-100"
            >
              <td className="p-3">
                {txn.txnId}
              </td>

              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    txn.txnType === "CREDIT"
                      ? "bg-green-500"
                      : txn.txnType === "DEBIT"
                      ? "bg-red-500"
                      : "bg-blue-500"
                  }`}
                >
                  {txn.txnType}
                </span>
              </td>

              <td className="p-3">
                ₹{txn.amount}
              </td>

              <td className="p-3">
                {txn.wallet?.walletId}
              </td>

              <td className="p-3">
                {txn.createdDate
                  ? new Date(txn.createdDate).toLocaleString()
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}