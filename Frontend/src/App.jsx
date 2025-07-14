import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import {
   Testimonials, CreateProvider, 
   Providers, Reviews ,Home, Header,
   Footer, Login, Register
  } from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/provider" element={<Providers />} />
        <Route path="/createProvider" element={<CreateProvider />} />

      </Routes>
      <Footer />
    </Router>
  );
}
