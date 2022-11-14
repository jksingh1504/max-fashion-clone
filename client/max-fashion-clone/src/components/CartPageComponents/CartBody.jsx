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
            {cart.length ? (
              cart.map((ele, indx) => <CartCard key={indx} ele={ele} />)
            ) : (
              <>
                <img
                  style={{
                    display: "inline-flex",
                    maxWidth:"500px",
                    margin: "auto",
                  }}
                  src="https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png"
                  alt=""
                />
                <h2>Oops..! you have no products in your Basket</h2>
              </>
            )}
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
