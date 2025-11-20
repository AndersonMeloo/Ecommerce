import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {

  return (
    
    <CartProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route 
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/perfil" element={<Perfil />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}