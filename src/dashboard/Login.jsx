import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
     
     
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/login`, { email, password });
      if (res.data && res.data.success) {
        setSuccess(res.data.message || "Login successful!");
        setError("");
        login();
        navigate("/dashboard/all-blogs", { replace: true });
      } else {
        setError(res.data?.message || "Login failed");
        setSuccess("");
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || "Network error - Please try again");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eff1fc] via-white to-[#ffe5f6] relative overflow-hidden">
      
      <img
        src="/images/rocket-Edited.png"
        alt="Rocket"
        className="absolute left-0 bottom-0 w-40 opacity-10 pointer-events-none select-none hidden md:block"
        style={{ zIndex: 1 }}
      />
   
      <div className="relative z-10 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl px-8 py-10 w-full max-w-md flex flex-col items-center border border-purple-100">
     
        <img
          src="/images/website-logo.png"
          alt="edukul Logo"
          className="h-16 mb-6 drop-shadow-lg"
        />
        <p className="text-gray-500 mb-8 text-center">Login to your Edukul dashboard</p>
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:outline-none bg-white text-gray-900 placeholder-gray-400 transition-all"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:outline-none bg-white text-gray-900 placeholder-gray-400 transition-all"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
          {success && <div className="text-green-600 text-center font-semibold">{success}</div>}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400 text-white font-bold text-lg shadow-md hover:scale-105 transition-transform duration-200"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
