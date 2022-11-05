import React from "react";
import "../../stylesheets/cartPage/cartDetails.css";

const CartDetails = () => {
  return (
    <div className="cart_details">
      <div>
        <div>
          <b>Deliver to</b>
          <h3>492013</h3>
        </div>
        <b style={{ color: "#303ab2" }}>Change</b>
      </div>
      <div>
        <div>
          <img
            src="https://www.maxfashion.in/static/icons/gift-box.png"
            alt=""
          />
        </div>
        <div style={{ flexDirection: "column", gap: "8px" }}>
          <div style={{ width: "100%" }}>
            <b>Offers for you !</b> <b style={{ color: "#303ab2" }}>Select</b>
          </div>
          <p> Choose and apply voucher in 2 simple steps</p>
        </div>
      </div>
      <div>
        <div>
          <p>Total MRP</p>
          <b>₹2897</b>
        </div>

        <div>
          <p>Offer discount</p>
          <b style={{ color: "green" }}>- ₹90</b>
        </div>

        <div>
          <p>Shipping charge</p>
          <b>Free</b>
        </div>

        <hr />

        <div>
          <h3>Total</h3>
          <h3>₹2807</h3>
        </div>
        <button>Checkout</button>
        <p
          style={{
            backgroundColor: "rgb(233, 233, 233)",
            padding: "6px",
            lineHeight: "20px",
            borderRadius: "3px",
          }}
        >
          Shipping charges might vary based on pincode delivery location
        </p>
      </div>
    </div>
  );
};

export default CartDetails;
