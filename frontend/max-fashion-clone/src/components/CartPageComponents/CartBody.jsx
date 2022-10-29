import React from "react";
import "../../stylesheets/Utilities/container.css";
import "../../stylesheets/cartPage/cartPage.css";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";
import { useSelector } from "react-redux";

const CartBody = () => {
  const cart = useSelector((store) => store.AppReducer.cart);

  return (
    <>
      <div className="container">
        <h2>Your Shopping Basket</h2>
        <hr />
        <h3 style={{ margin: "16px 0px" }}>{cart.length} Products</h3>
        <div id="cart_container">
          <div>
            {cart.map((ele, indx) => (
              <CartCard key={indx} ele={ele} />
            ))}
          </div>
          <div>
            <CartDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBody;
