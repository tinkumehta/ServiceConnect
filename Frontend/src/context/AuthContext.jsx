import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// import api from './config';

const api = import.meta.env.VITE_API_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(`${api}/api/auth/current-user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(res.data.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData) => {
    const res = await axios.post(
      `${api}/api/auth/register`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    localStorage.setItem('token', res.data.data.token);
    await getCurrentUser(); // ✅ Immediately update user
  };

  const login = async (email, password) => {
    const res = await axios.post(`${api}/api/auth/login`, {
      email,
      password,
    });
    localStorage.setItem('token', res.data.data.token);
    await getCurrentUser(); // ✅ Immediately update user
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
