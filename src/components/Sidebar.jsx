import { Link } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaExchangeAlt,
  FaHistory
} from "react-icons/fa";

export default function Sidebar() {

  return (

    <div className="bg-slate-800 text-white w-64 min-h-screen p-6">

      <ul className="space-y-6">

        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/wallets"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaWallet />
            Wallets
          </Link>
        </li>

        <li>
          <Link
            to="/transfer"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaExchangeAlt />
            Transfer
          </Link>
        </li>

        <li>
          <Link
            to="/transactions"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaHistory />
            Transactions
          </Link>
        </li>

      </ul>

    </div>
  );
}