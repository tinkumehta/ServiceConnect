import { createContext, useState, useEffect } from "react";
import axios from "axios";

const api = import.meta.env.VITE_API_URL; // example: https://service-connect-five.vercel.app

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch current user if token exists
  const getCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await axios.get(`${api}/api/auth/current-user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data?.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Register user
  const register = async (formData) => {
    try {
      const res = await axios.post(`${api}/api/auth/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const token = res.data?.data?.token;
      if (token) localStorage.setItem("token", token);

      await getCurrentUser();
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message || "Registration failed. Try again."
      );
    }
  };

  // ✅ Login user
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${api}/api/auth/login`, { email, password });
      const token = res.data?.data?.token;
      if (token) localStorage.setItem("token", token);

      await getCurrentUser();
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      throw new Error(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // ✅ Auto-load user on page load
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
