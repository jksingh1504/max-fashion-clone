import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductListPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productList" element={<ProductListPage />} />
      <Route path="/productPage" element={<ProductPage/>} />
    </Routes>
  );
};

export default MainRoutes;
