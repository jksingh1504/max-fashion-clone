import React from "react";
import "../../stylesheets/Utilities/container.css";
import "../../stylesheets/cartPage/cartPage.css";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";

const CartBody = () => {
  return (
    <>
      <div className="container">
        <h2>Your Shopping Basket</h2>
        <hr />
        <h3 style={{ margin: "16px 0px" }}>3 Products</h3>
        <div id="cart_container">
          <div>
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
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
