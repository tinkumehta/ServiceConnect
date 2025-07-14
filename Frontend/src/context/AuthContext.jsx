import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import config from "./config";

 export const AuthContext = createContext();

  export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const api = axios.create({
        baseURL : config.envUrl,
        headers : {'Content-Type' : 'application/json'}
    })

    useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const register = (name, username,email, password,role) => api.post('/auth/register', {name, username,email, password, role });

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    setToken(res.data.data.token);
  };

    return (
        <AuthContext.Provider value={{token, register, login}}>
            {children}
        </AuthContext.Provider>
    )
  }