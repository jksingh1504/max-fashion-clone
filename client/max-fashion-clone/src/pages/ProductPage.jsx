import React from "react";
import MobileNav from "../components/Navbar/MobileNav/MobileNav";
import Navbar from "../components/Navbar/Navbar";
import ProductDetails from "../components/ProductPage/ProductDetails";
import "../stylesheets/Utilities/container.css";

const ProductPage = () => {
  window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <Navbar />
      <MobileNav />
      <div className="container">
        <ProductDetails />
      </div>
    </>
  );
};

export default ProductPage;
