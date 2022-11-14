import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "../../stylesheets/ProductPage/productList.css";
import Accordian from "../Utilities/Accordian";
import ProductCard from "./ProductCard";
import axios from "axios";
import SortingFilter from "../Filters/SortingFilter";
import { useToast } from "@chakra-ui/react";

const ProductList = () => {
  const [sortModalHeight, setSortModalHeight] = useState("0px");
  const { url } = useParams();
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const toast = useToast();
  const toastIdRef = useRef(null);
  const sort = searchParams.getAll("sort");

  useEffect(() => {
    let currenturl = url.split("_").join("/");
    currenturl += "?" + window.location.href.split("?")[1];

    axios
      .get(`https://max-fashion-clone-server.vercel.app/${currenturl}`)
      .then((res) => {
        setProducts(res.data);
        if (currenturl.split("?")[1] != "undefined") {
          // console.log(currenturl.split("?"))
          if (toastIdRef.current) {
            toast.close(toastIdRef.current);
          }
          toastIdRef.current = toast({
            position: "bottom",
            title: "Filters Applied",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  }, [searchParams, url, toast]);

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
                setSortModalHeight("100px");
              } else setSortModalHeight("0px");
            }}
          >
            Price-
            {sort[0]
              ? sort[0] === "asc"
                ? "Low to high"
                : "High to low"
              : "Add sort"}
            <span className="material-icons">expand_more</span>
          </div>
          <Accordian
            style={{ top: "38px", right: "0px", minWidth: "200px" }}
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
