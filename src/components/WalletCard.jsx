import { FaWallet } from "react-icons/fa";

export default function WalletCard({
  title = "",
  wallet_id = "",
  value = 0,
  loading = false,
  status = "ACTIVE",
  icon = null,
  onClick = null,
}) {
  const formatValue = (val) => {
    if (typeof val === "number") {
      return "₹" + val.toLocaleString("en-IN");
    }
    return val;
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Wallet ID: {wallet_id}
          </p>
        </div>

        <div className="bg-blue-100 p-3 rounded-full">
          {icon ? (
            <div className="text-blue-700 text-2xl">{icon}</div>
          ) : (
            <FaWallet className="text-blue-700 text-2xl" />
          )}
        </div>

      </div>

      {/* Balance */}
      <div className="mt-6">

        <p className="text-gray-500 text-sm">
          Current Balance
        </p>

        {loading ? (
          <div className="h-10 w-32 bg-gray-200 animate-pulse rounded mt-2" />
        ) : (
          <h1 className="text-4xl font-bold text-blue-900 mt-2">
            {formatValue(value)}
          </h1>
        )}

      </div>

      {/* Footer */}
      {/* <div className="mt-6 pt-4 border-t flex justify-between items-center">

        <span className="text-sm text-gray-500">
          Status
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            status === "ACTIVE"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>

      </div> */}
    </div>
  );
}