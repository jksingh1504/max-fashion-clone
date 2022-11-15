import { useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../stylesheets/cartPage/cartCard.css";
import "../../stylesheets/Utilities/flex.css";
import * as action from "../../redux/AppRedux/action";
import { Link } from "react-router-dom";

const WishlistCard = ({ ele, setWishlist }) => {
  const toastIdRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const { _id: user_id } = useSelector((store) => store.AppReducer.user);

  const handle_remove_wishlist_item = () => {
    const wislistItem = JSON.parse(localStorage.getItem("max-wishlist"));
    for (let i = 0; i < wislistItem.length; i++) {
      // console.log("hello");
      if (ele.product_id === wislistItem[i].product_id)
        wislistItem.splice(i, 1);
    }
    localStorage.setItem("max-wishlist", JSON.stringify(wislistItem));
    setWishlist(wislistItem);
  };

  const handle_move_to_basket = () => {
    fetch("https://max-fashion-clone-server.vercel.app/max-fashion/cart", {
      method: "POST",
      body: JSON.stringify(ele),
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
    handle_remove_wishlist_item();
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
      </flex>
      <hr />
      <div>
        <div>
          <p onClick={handle_remove_wishlist_item}>Remove</p>
        </div>
        <div>
          <p onClick={handle_move_to_basket}>Move to Basket</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
