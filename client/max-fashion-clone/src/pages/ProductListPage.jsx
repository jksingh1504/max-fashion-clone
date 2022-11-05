import React from "react";
import BreadCrumb from "../components/Utilities/BreadCrumb";
import FilterSection from "../components/ProductListComponents/FilterSection";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductListComponents/ProductList";
import ShopFor from "../components/ProductListComponents/ShopFor";
import "../stylesheets/Utilities/container.css";
import MobileNav from "../components/Navbar/MobileNav/MobileNav";

const ProductListPage = () => {
  if(window.innerWidth<=800)
  window.scrollTo({top:250,behavior:'smooth'})
  return (
    <>
      <Navbar />
      <MobileNav />
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
