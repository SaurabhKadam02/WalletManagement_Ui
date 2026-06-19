import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await authService.login({
        email,
        password,
      });

      // backend: AuthResponse (likely { token: "..." })
      const token = response.data?.token;

      if (!token) {
        alert("Invalid server response: token missing");
        return;
      }

      localStorage.setItem("token", token);

      alert("Login Successful");

      navigate("/dashboard");
    }catch (error) {
  console.error("Login error:", error);

  if (error.response) {

    if (typeof error.response.data === "string") {
      alert(error.response.data);
    }

    else if (error.response.data.message) {
      alert(error.response.data.message);
    }

    else if (error.response.status === 500) {
      alert("Invalid email or password");
    }

    else {
      alert("Login failed");
    }

  } else {
    alert("Unable to connect to server");
  }
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="bg-white shadow-xl rounded-xl p-10 w-[400px]">
        
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Wallet Management
        </h1>

        <div className="space-y-5">
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full text-white p-3 rounded-lg transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-900"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-800 ml-2 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}