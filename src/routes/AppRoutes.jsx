import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import WalletPage from "../pages/WalletPage";
import TransferPage from "../pages/TransferPage";
import TransactionPage from "../pages/TransactionPage";

export default function AppRoutes() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />

                <Route
                    path="/wallets"
                    element={<WalletPage />}
                />

                <Route
                    path="/transfer"
                    element={<TransferPage />}
                />

                <Route
                    path="/transactions"
                    element={<TransactionPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}