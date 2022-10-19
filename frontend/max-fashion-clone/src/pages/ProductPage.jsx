import React from "react";
import BreadCrumb from "../components/Utilities/BreadCrumb";
import FilterSection from "../components/ProductPageComponents/FilterSection";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductPageComponents/ProductList";
import ShopFor from "../components/HomePageComponents/ShopFor";
import "../stylesheets/Utilities/container.css";

const ProductPage = () => {
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

export default ProductPage;
