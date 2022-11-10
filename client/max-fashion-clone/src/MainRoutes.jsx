import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/:url" element={<ProductListPage />} />
      <Route path="/paymentSuccess" element={<PaymentSuccess />} />
    </Routes>
  );
};

export default MainRoutes;
