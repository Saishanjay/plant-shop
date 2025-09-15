// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px", maxWidth: 1100, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}
