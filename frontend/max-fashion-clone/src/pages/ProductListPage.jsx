import React from "react";
import BreadCrumb from "../components/Utilities/BreadCrumb";
import FilterSection from "../components/ProductListComponents/FilterSection";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductListComponents/ProductList";
import ShopFor from "../components/ProductListComponents/ShopFor";
import "../stylesheets/Utilities/container.css";
import MobileNav from "../components/Navbar/MobileNav";

const ProductListPage = () => {
  return (
    <>
      <Navbar />
      <MobileNav/>
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
