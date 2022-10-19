import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "../../stylesheets/ProductPage/productCard.css";
import Accordian from "../Utilities/Accordian";

const ProductCard = () => {
  const [color, setColor] = useState("0px");
  const [size, setSize] = useState("0px");
  const currentModal = useRef(() => {
    return "";
  });

  return (
    <div
      onMouseLeave={() => currentModal.current("0px")}
      className="product_card"
    >
      <div>
        <img
          src="https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011295251-Pink-ROSEPINKP-1000011295251-12062022_01-2100.jpg"
          alt=""
        />
        <span class="material-icons">favorite_border</span>
      </div>
      <p style={{ fontSize: "20px", fontWeight: "600", margin: "10px 0px" }}>
        <span style={{ fontSize: "12px" }} className="material-icons">
          currency_rupee
        </span>{" "}
        999
      </p>
      <p style={{ fontSize: "14px" }}>MAX Women Printed Night Dress</p>
      <br />
      <div className="add_to_cart_section">
        <div>
          <div style={{ position: "relative" }}>
            <div
              style={{ width: "100%" }}
              onClick={() => {
                currentModal.current("0px");
                if (color === "0px") {
                  setColor("150px");
                  currentModal.current = setColor;
                } else setColor("0px");
              }}
            >
              <div>
                <img
                  src="https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011154739-Pink-PINKP-1000011154739-19032022_01-2100.jpg"
                  alt=""
                />
                <p>pink</p>
              </div>
              <span className="material-icons">expand_more</span>
            </div>
            <Accordian
              height={color}
              style={{ bottom: "54px", left: "0", borderRadius: "3px" }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{ width: "100%" }}
              onClick={() => {
                currentModal.current("0px");
                if (size === "0px") {
                  setSize("200px");
                  currentModal.current = setSize;
                } else setSize("0px");
              }}
            >
              <p>Select Size</p>
              <span className="material-icons">expand_more</span>
            </div>
            <Accordian
              height={size}
              style={{ bottom: "54px", left: "0", borderRadius: "3px" }}
            />
          </div>
        </div>
        <button>ADD TO BASKET</button>
      </div>
    </div>
  );
};

export default ProductCard;
