import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../stylesheets/ProductPage/productCard.css";
import Accordian from "../Utilities/Accordian";
import SizeSelector from "./SizeSelector";
import { useToast } from "@chakra-ui/react";
import * as action from "../../redux/AppRedux/action";

const ProductCard = ({ ele }) => {
  // console.log(ele);
  const [color, setColor] = useState("0px");
  const toastIdRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const product_size = useSelector((store) => store.AppReducer.product_size);
  const [size, setSize] = useState("0px");
  const currentModal = useRef(() => {
    return "";
  });
  const { _id: user_id } = useSelector((store) => store.AppReducer.user);

  const handle_add_to_cart = (ele) => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (product_size === "" || !ele.size.includes(product_size)) {
      
      toastIdRef.current = toast({
        position: "bottom",
        title: "Please select product size",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const cart_product = { ...ele };
    delete cart_product._id;
    cart_product.product_id = ele._id;
    cart_product.quantity = 1;
    cart_product.user_id = user_id;
    cart_product.size = [product_size];
    console.log(cart_product)

    fetch("https://max-fashion-clone-server.vercel.app/max-fashion/cart", {
      method: "POST",
      body: JSON.stringify(cart_product),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then(async (data) => {
        const { message, error } = await data;
        if (!error) {
          fetch(
            `https://max-fashion-clone-server.vercel.app/max-fashion/cart/${user_id}`
          )
            .then((res) => res.json())
            .then((data) => {
              dispatch(action.set_cart(data));
            });
          toastIdRef.current = toast({
            position: "bottom",
            title: message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else if (error) {
          toastIdRef.current = toast({
            position: "bottom",
            title: message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  };

  const close_size_accordian = () => {
    currentModal.current("0px");
    if (size === "0px") {
      setSize("200px");
      currentModal.current = setSize;
    } else setSize("0px");
  };

  const close_color_accordian = () => {
    currentModal.current("0px");
    if (color === "0px") {
      setColor("150px");
      currentModal.current = setColor;
    } else setColor("0px");
  };

  return (
    <div
      onMouseLeave={() => currentModal.current("0px")}
      className="product_card"
    >
      <div>
        <Link to={`/product?${ele._id}`}>
          <img src={ele["img_url"]} loading="lazy" alt="" />
        </Link>
        <span className="material-icons">favorite_border</span>
      </div>
      <p style={{ fontWeight: "600", margin: "10px 0px 8px 4px" }}>
        <span style={{ fontSize: "12px" }} className="material-icons">
          currency_rupee
        </span>
        {" " + ele.price}
        <span>{"(Brand: " + ele.brand + ")"}</span>
      </p>
      <p style={{ marginLeft: "4px" }}>{ele.name}</p>
      <br />
      <div className="add_to_cart_section">
        <div>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%" }} onClick={close_color_accordian}>
              <div>
                <img
                  src="https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011154739-Pink-PINKP-1000011154739-19032022_01-2100.jpg"
                  loading="lazy"
                  alt=""
                />
                <p>pink</p>
              </div>
              <span className="material-icons">expand_more</span>
            </div>
            <Accordian
              height={color}
              style={{
                bottom: "54px",
                padding: "0px 10px",
                color: "red",
                left: "0",
                borderRadius: "3px",
              }}
            >
              <b onClick={() => currentModal.current("0px")}>
                sorry!.., no colour options available for this product
              </b>
            </Accordian>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%" }} onClick={close_size_accordian}>
              <p>
                {ele.size.includes(product_size) ? product_size : "select size"}
              </p>
              <span className="material-icons">expand_more</span>
            </div>
            <Accordian
              height={size}
              style={{
                bottom: "54px",
                width: "100%",
                left: "0",
                borderRadius: "3px",
              }}
            >
              <SizeSelector currentModal={currentModal} size={ele.size} />
            </Accordian>
          </div>
        </div>
        <button onClick={(e) => handle_add_to_cart(ele)}>ADD TO BASKET</button>
      </div>
    </div>
  );
};

export default ProductCard;
