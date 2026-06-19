export default function WalletCard({
  title = "",
  value = 0,
  loading = false,
  icon = null,
  onClick = null
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
      className={`bg-white shadow-lg rounded-xl p-6 transition ${
        onClick ? "cursor-pointer hover:shadow-xl" : ""
      }`}
    >

      <div className="flex items-center justify-between">

        <h3 className="text-gray-500 text-lg">
          {title}
        </h3>

        {icon && (
          <div className="text-blue-900 text-2xl">
            {icon}
          </div>
        )}

      </div>

      {loading ? (
        <div className="h-10 w-24 bg-gray-200 animate-pulse rounded mt-3" />
      ) : (
        <h1 className="text-3xl font-bold text-blue-900 mt-3">
          {formatValue(value)}
        </h1>
      )}

    </div>
  );
}