import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import {
   Testimonials, CreateProvider, 
   Providers, Reviews ,Home, Header,
   Footer, Login, Register, Profile
  } from "./components";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login'
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/provider" element={<Providers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createProvider" element={<CreateProvider />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}
