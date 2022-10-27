import React, { useState } from "react";
import "../../stylesheets/ProductPage/productList.css";
import Accordian from "../Utilities/Accordian";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [sortModalHeight, setSortModalHeight] = useState("0px");
  return (
    <>
      <br />
      <div className="total_and_sort">
        <p>98 Products</p>
        <div style={{ position: "relative" }}>
          <p>Sort by</p>
          <div
            onClick={() => {
              if (sortModalHeight === "0px") {
                setSortModalHeight("200px");
              } else setSortModalHeight("0px");
            }}
          >
            Price-Low to High{" "}
            <span className="material-icons">expand_more</span>
          </div>
          <Accordian
            style={{ top: "38px", right: "0px", minWidth: "220px" }}
            height={sortModalHeight}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="product_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default ProductList;
