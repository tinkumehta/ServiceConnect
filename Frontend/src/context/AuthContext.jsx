import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get user
  const getCurrentUser = async () => {
    try {
      const res = await axios.get('/api/auth/current-user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(res.data.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Register
  const register = async (formData) => {
    const res = await axios.post(
      '/api/auth/register',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    localStorage.setItem('token', res.data.data.token);
    setUser(res.data.data.user);
  };

  // Login
  const login = async (email, password) => {
    const res = await axios.post('/api/auth/login', {
      email,
      password,
    });
    localStorage.setItem('token', res.data.data.token);
    setUser(res.data.data.user);
  };

  // Logout
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
