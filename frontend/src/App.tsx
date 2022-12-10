import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="products" />} />
        <Route path="products" element={<Home />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
