import { useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../stylesheets/cartPage/cartCard.css";
import "../../stylesheets/Utilities/flex.css";
import * as action from "../../redux/AppRedux/action";
import { Link } from "react-router-dom";

const CartCard = ({ ele }) => {
  const [qty, setQty] = useState(ele.quantity);
  const toastIdRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const store = useSelector((store) => store);

  const handle_quantity = (e) => {
    e.preventDefault();
    setQty(e.target.value);
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    fetch(
      "https://max-fashion-clone-server.vercel.app/max-fashion/cart/quantity",
      {
        method: "PATCH",
        body: JSON.stringify({
          quantity: e.target.value,
          user_id: ele.user_id,
          product_id: ele.product_id,
        }),
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then(async (data) => {
        const { message, error } = await data;
        if (!error) {
          fetch(
            `https://max-fashion-clone-server.vercel.app/max-fashion/cart/${store.AppReducer.user._id}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(e.target.value);
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

  const handle_delete = () => {
    fetch(
      `https://max-fashion-clone-server.vercel.app/max-fashion/cart/${ele.user_id}/${ele.product_id}`,
      { method: "DELETE" }
    )
      .then((res) => res.json())
      .then(async (data) => {
        const { message, error } = await data;
        if (!error) {
          fetch(
            `https://max-fashion-clone-server.vercel.app/max-fashion/cart/${store.AppReducer.user._id}`
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

  const handle_wishlist = () => {
    handle_delete();
    const wishlist = JSON.parse(localStorage.getItem("max-wishlist")) || [];
    wishlist.push(ele)
    localStorage.setItem("max-wishlist",JSON.stringify(wishlist));
  };

  return (
    <div className="cart_card">
      <div>
        <div>
          <Link to={`/product?${ele.product_id}`}>
            <img
              loading="lazy"
              style={{ height: "100%" }}
              src={ele["img_url"]}
              alt="product_img"
            />
          </Link>
        </div>
        <div style={{ marginTop: "-6px" }}>
          <b>{ele.name}</b>
          <br />
          <b style={{ marginTop: "14px" }}>₹ {ele.price}</b>
          <flex
            style={{
              marginTop: "26px",
            }}
          >
            <p style={{ color: "grey" }}>Color:</p>{" "}
            <p style={{ marginLeft: "10px" }}>your favorite</p>
          </flex>
          <flex>
            <p style={{ color: "grey" }}>Size:</p>
            <p style={{ marginLeft: "20px" }}>{ele.size[0]}</p>
          </flex>
        </div>
      </div>

      <flex style={{ justifyContent: "space-between", margin: "14px 0px" }}>
        <p style={{ color: "grey" }}>
          <span
            style={{
              display: "inline-flex",
              fontSize: "18px",
              marginRight: "8px",
            }}
            className="material-icons"
          >
            calendar_month
          </span>
          Delivery in{" "}
          <span style={{ color: "black", marginLeft: "6px" }}> 5-7 days</span>
        </p>
        <div style={{ marginTop: "-10px" }}>
          <select onChange={handle_quantity} value={qty} name="qty" id="qty">
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
            <option value="3">Qty: 3</option>
            <option value="4">Qty: 4</option>
            <option value="5">Qty: 5</option>
          </select>
          <span className="material-icons">arrow_drop_down</span>
        </div>
      </flex>
      <hr />
      <div>
        <div>
          <p onClick={handle_delete}>Remove</p>
        </div>
        <div>
          <p onClick={handle_wishlist}>Move to Favourites</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
