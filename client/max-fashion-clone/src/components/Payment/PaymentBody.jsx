import React from "react";
import "../../stylesheets/Utilities/container.css";
import "../../stylesheets/PaymentPage/paymentPage.css";
import "../../stylesheets/Utilities/flex.css";
import "../../stylesheets/PaymentPage/orderSummary.css";
import "../../stylesheets/PaymentPage/addressAndPay.css";
import OrderSummary from "./OrderSummary";
import { Navigate, useNavigate } from "react-router-dom";

const PaymentBody = () => {
  // console.log("hello");
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <br />
        <div id="payment_body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setTimeout(() => navigate("/paymentSuccess"), 2000);
            }}
          >
            <div className="address_and_payment">
              <h4>Add your shipping address</h4>
              <div></div>
              <div>
                <b>Full Name</b>
                <br />
                <input type="text" required placeholder="Enter your Name" />
              </div>
              <div>
                <b>Mobile Number</b>
                <br />
                <input
                  type="text"
                  required
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <b>Pincode</b>
                <br />
                <input
                  type="text"
                  required
                  placeholder="Enter your area Pincode"
                />
              </div>
              <div>
                <b>City</b>
                <br />
                <input type="text" required placeholder="Enter your City" />
              </div>
              <div>
                <b>State</b>
                <br />
                <input type="text" required placeholder="Enter your State" />
              </div>
              <div>
                <b>Building name or number</b>
                <br />
                <input
                  type="text"
                  required
                  placeholder="Enter your Building Number"
                />
              </div>
              <div>
                <b>Street name or number</b>
                <br />
                <input
                  type="text"
                  required
                  placeholder="Enter your street name or number"
                />
              </div>
              <div>
                <b>
                  Landmark{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (optional)
                  </span>
                </b>
                <br />
                <input type="text" placeholder="Enter Landmark near you" />
              </div>
              <div>
                <b>
                  Address Type{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (optional)
                  </span>
                </b>
                <br />
                <label htmlFor="home">
                  <input
                    id="home"
                    style={{ marginRight: "10px" }}
                    name="adress_type"
                    type="radio"
                    placeholder="Enter your Name"
                  />
                  Home
                </label>
                <label style={{ marginLeft: "100px" }} htmlFor="office">
                  <input
                    id="office"
                    style={{ marginRight: "10px" }}
                    name="adress_type"
                    type="radio"
                    placeholder="Enter your Name"
                  />
                  Office
                </label>
              </div>
              <hr />
              <h4 style={{ fontSize: "25px" }}>Select a payment Method</h4>
              <div>
                <label
                  style={{ display: "flex", alignItems: "center" }}
                  htmlFor="cod"
                >
                  <input
                    id="cod"
                    style={{ marginRight: "30px" }}
                    name="payment"
                    type="radio"
                    required
                    placeholder="Enter your Name"
                  />
                  <img
                    style={{
                      width: "30px",
                      display: "inline",
                      marginRight: "10px",
                    }}
                    src="https://dd311b21463486cea6e6-ba57f67b7c05f7cbe632f35f74bd7340.ssl.cf3.rackcdn.com/Checkout/order_summary.png"
                    loading="lazy"
                    alt=""
                  />
                  <div>
                    <b style={{ fontWeight: "700", fontSize: "16px" }}>
                      Cash on Delivery
                    </b>
                    <p>+ Rs 49</p>
                  </div>
                </label>
              </div>
              <hr />
              <div>
                <label
                  style={{ display: "flex", alignItems: "center" }}
                  htmlFor="netbanking"
                >
                  <input
                    id="netbanking"
                    style={{ marginRight: "30px" }}
                    name="payment"
                    type="radio"
                    required
                    placeholder="Enter your Name"
                  />
                  <img
                    style={{
                      width: "30px",
                      display: "inline",
                      marginRight: "10px",
                    }}
                    src="https://i1.lmsin.net/website_images/in/my-account/ico-payment-netbanking.png"
                    loading="lazy"
                    alt=""
                  />
                  <div>
                    <b style={{ fontWeight: "700", fontSize: "16px" }}>
                      Net Banking
                    </b>
                    <p>Pay by your preferred bank account.</p>
                  </div>
                </label>
              </div>
              <hr />
              <div>
                <label
                  style={{ display: "flex", alignItems: "center" }}
                  htmlFor="wallet"
                >
                  <input
                    id="wallet"
                    style={{ marginRight: "30px" }}
                    name="payment"
                    type="radio"
                    required
                    placeholder="Enter your Name"
                  />
                  <img
                    style={{
                      width: "30px",
                      display: "inline",
                      marginRight: "10px",
                    }}
                    src="https://i1.lmsin.net/website_images/in/my-account/ico-payment-wallet.png"
                    loading="lazy"
                    alt=""
                  />
                  <div>
                    <b style={{ fontWeight: "700", fontSize: "16px" }}>
                      Wallets
                    </b>
                    <p>Pay with your preferred wallet.</p>
                  </div>
                </label>
              </div>
              <hr />
              <div>
                <label
                  style={{ display: "flex", alignItems: "center" }}
                  htmlFor="upi"
                >
                  <input
                    id="upi"
                    style={{ marginRight: "30px" }}
                    name="payment"
                    type="radio"
                    required
                    placeholder="Enter your Name"
                  />
                  <img
                    style={{
                      width: "30px",
                      display: "inline",
                      marginRight: "10px",
                    }}
                    src="https://i1.lmsin.net/website_images/payment/upi.png"
                    loading="lazy"
                    alt=""
                  />
                  <div>
                    <b style={{ fontWeight: "700", fontSize: "16px" }}>UPI</b>
                    <p>Pay with your preferred UPI Id.</p>
                  </div>
                </label>
              </div>
              <hr />
              <flex style={{ justifyContent: "space-between", gap: "20px" }}>
                <p style={{ fontSize: "12px" }}>
                  By clicking on Proceed to Payment, you agree to our Terms and
                  Conditions
                </p>
                <button
                  style={{
                    backgroundColor: "#303ab2",
                    padding: "16px 50px",
                    color: "white",
                    fontWeight: "600",
                    borderRadius: "2px",
                    fontSize: "14px",
                  }}
                >
                  Place your Order
                </button>
              </flex>
            </div>
          </form>
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default PaymentBody;
