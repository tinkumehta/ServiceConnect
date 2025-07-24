import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import {
   Testimonials, CreateProvider, 
   Providers, Reviews ,Home, Header,
   Footer, Login, Register, Profile
  } from "./components";
  import ProtectedRoute from "./components/PrivateRoutes";

export default function App() {

  

  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/provider" element={<Providers />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/review" element={
          <ProtectedRoute>
            <Reviews />
          </ProtectedRoute>
        }
        />
        <Route path="/createProvider" element={
          <ProtectedRoute>
            <CreateProvider />
          </ProtectedRoute>
        }
        />
        <Route path="/testimonials" element={
          <ProtectedRoute>
            <Testimonials />
          </ProtectedRoute>
        }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
