import React from "react";
import { useSelector } from "react-redux";
import "../../stylesheets/PaymentPage/orderSummary.css";

const OrderSummary = () => {
  const { total, cart } = useSelector((store) => store.AppReducer);
  //   console.log(cart);

  return (
    <div className="order_summary">
      <div className="sticky_div">
        <h4>Your order summary</h4>
        <hr />
        <div className="checkout_products">
          {cart.map((ele, indx) => (
            <div>
              <img src={ele["img_url"]} loading="lazy" alt="" />
              <div style={{ marginTop: "-4px" }}>
                <span>MAX</span>
                <p style={{ marginTop: "10px" }}>{ele.name}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <flex style={{ marginTop: "10px" }}>
                    <span>Qty : </span> <p>{ele.quantity}</p>
                  </flex>
                  <flex style={{ marginTop: "10px" }}>
                    <span>Price : </span> <b>₹ {ele.price}</b>
                  </flex>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div>
          <b>Subtotal :</b>
          <h4>₹ {total}</h4>
        </div>
        <hr />
        <div>
          <b>Discount :</b>
          <h4>-₹ {Math.ceil(total * 0.1)}</h4>
        </div>
        <hr />
        <div>
          <div>
            <b>Standard Ground Shipping:</b>
            <br />
            <span style={{ color: "green" }}>(2-4 business days)</span>
          </div>
          <h4>Free</h4>
        </div>
        <hr />
        <div>
          <h4>Total</h4>
          <h4>₹ {total - Math.ceil(total * 0.1)}</h4>
        </div>
        <hr />
        <p style={{ marginTop: "20px" }}>
          Shipping charges might vary based on delivery location
        </p>
        <br />
        <hr />
        <div className="payment_options">
          <b>Ways you can pay:</b>
          <flex>
            <img
              src="https://i1.lmsin.net/website_images/ae/checkout/logo-visa.png"
              loading="lazy"
              alt=""
            />
            <img
              src="https://i1.lmsin.net/website_images/ae/checkout/logo-mc.png"
              loading="lazy"
              alt=""
            />
            <img
              src="https://i1.lmsin.net/website_images/in/checkout/logo-rupay.svg"
              loading="lazy"
              alt=""
            />
            <img
              src="https://i1.lmsin.net/website_images/ae/checkout/logo-cash.png"
              loading="lazy"
              alt=""
            />
            <img
              src="https://i1.lmsin.net/website_images/in/checkout/logo-netbanking.svg"
              loading="lazy"
              alt=""
            />
            <img
              src="https://i1.lmsin.net/website_images/in/checkout/logo-wallet.svg"
              loading="lazy"
              alt=""
            />
          </flex>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
