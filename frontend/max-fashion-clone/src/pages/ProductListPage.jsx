import React from "react";
import BreadCrumb from "../components/Utilities/BreadCrumb";
import FilterSection from "../components/ProductListComponents/FilterSection";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductListComponents/ProductList";
import ShopFor from "../components/HomePageComponents/ShopFor";
import "../stylesheets/Utilities/container.css";

const ProductListPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <BreadCrumb />
        <ShopFor />
        <FilterSection />
        <ProductList />
      </div>
    </>
  );
};

export default ProductListPage;
