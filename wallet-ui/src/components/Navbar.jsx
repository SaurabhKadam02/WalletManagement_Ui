import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="bg-blue-900 text-white h-16 px-8 flex justify-between items-center shadow-md">

      <div className="flex items-center gap-3">
        <FaWallet size={24} />
        <h1 className="text-2xl font-bold">
          Wallet Management System
        </h1>
      </div>

      <button
      onClick={handleLogout}
      className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>

    </div>
  );
}