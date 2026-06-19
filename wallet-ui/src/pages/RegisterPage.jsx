import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../services/authService";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    try {
      setLoading(true);

      await authService.register({
        name,
        email,
        password,
      });

      alert("User Registered Successfully");

      navigate("/");
    } catch (error) {
      console.error("Register error:", error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else if (error.response?.status === 409) {
        alert("User already exists");
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
          Create Account
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            className={`w-full text-white p-3 rounded-lg transition ${
              loading
                ? "bg-emerald-400 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <p className="text-center text-sm">
            Already have an account?
            <Link
              to="/"
              className="text-blue-800 ml-2 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}