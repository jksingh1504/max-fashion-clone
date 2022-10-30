import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "../../stylesheets/ProductPage/productList.css";
import Accordian from "../Utilities/Accordian";
import ProductCard from "./ProductCard";
import axios from "axios";
import SortingFilter from "../Filters/SortingFilter";

const ProductList = () => {
  const [sortModalHeight, setSortModalHeight] = useState("0px");
  const { url } = useParams();
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let currenturl = url.split("_").join("/");
    currenturl+="?"+window.location.href.split("?")[1]

    axios
      .get(`https://arcane-oasis-69173.herokuapp.com/${currenturl}`)
      .then((res) => setProducts(res.data));
  }, [searchParams,url]);

  return (
    <>
      <br />
      <div className="total_and_sort">
        <p>{products.length} Products</p>
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
          >
            <SortingFilter />
          </Accordian>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="product_list">
        {products.map((ele) => (
          <ProductCard key={ele._id} ele={ele} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
