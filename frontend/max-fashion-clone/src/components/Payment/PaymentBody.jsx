import React from "react";
import "../../stylesheets/Utilities/container.css";
import "../../stylesheets/PaymentPage/paymentPage.css";
import "../../stylesheets/Utilities/flex.css";
import "../../stylesheets/PaymentPage/orderSummary.css";
import "../../stylesheets/PaymentPage/addressAndPay.css";

const PaymentBody = () => {
  return (
    <>
      <div className="container">
        <br />
        <div id="payment_body">
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
              <input type="text" required placeholder="Enter your Name" />
            </div>
            <div>
              <b>Pincode</b>
              <br />
              <input type="text" required placeholder="Enter your Name" />
            </div>
            <div>
              <b>City</b>
              <br />
              <input type="text" required placeholder="Enter your Name" />
            </div>
            <div>
              <b>State</b>
              <br />
              <input type="text" required placeholder="Enter your Name" />
            </div>
            <div>
              <b>Building name or number</b>
              <br />
              <input type="text" required placeholder="Enter your Name" />
            </div>
            <div>
              <b>Street name or number</b>
              <br />
              <input type="text" required placeholder="Enter your Name" />
            </div>
            <div>
              <b>
                Landmark{" "}
                <span
                  style={{ fontWeight: "400", fontSize: "12px", color: "grey" }}
                >
                  (optional)
                </span>
              </b>
              <br />
              <input type="text" placeholder="Enter your Name" />
            </div>
            <div>
              <b>
                Address Type{" "}
                <span
                  style={{ fontWeight: "400", fontSize: "12px", color: "grey" }}
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
                  placeholder="Enter your Name"
                />
                <img
                  style={{
                    width: "30px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                  src="https://dd311b21463486cea6e6-ba57f67b7c05f7cbe632f35f74bd7340.ssl.cf3.rackcdn.com/Checkout/order_summary.png"
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
                  placeholder="Enter your Name"
                />
                <img
                  style={{
                    width: "30px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                  src="https://i1.lmsin.net/website_images/in/my-account/ico-payment-netbanking.png"
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
                  placeholder="Enter your Name"
                />
                <img
                  style={{
                    width: "30px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                  src="https://i1.lmsin.net/website_images/in/my-account/ico-payment-wallet.png"
                  alt=""
                />
                <div>
                  <b style={{ fontWeight: "700", fontSize: "16px" }}>Wallets</b>
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
                  placeholder="Enter your Name"
                />
                <img
                  style={{
                    width: "30px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                  src="https://i1.lmsin.net/website_images/payment/upi.png"
                  alt=""
                />
                <div>
                  <b style={{ fontWeight: "700", fontSize: "16px" }}>UPI</b>
                  <p>Pay with your preferred UPI Id.</p>
                </div>
              </label>
            </div>
            <hr />
            <flex style={{justifyContent:"space-between",gap:"20px"}}>
              <p style={{fontSize:"12px"}}>By clicking on Proceed to Payment, you agree to our Terms and Conditions</p>
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
          <div className="order_summary">
            <div className="sticky_div">
              <h4>Your order summary</h4>
              <hr />
              <div className="checkout_products">
                <div>
                  <img
                    src="https://lmsin.net/cdn-cgi/image/h=150,w=150,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011662449-Green-OLIVEGREENP-1000011662449-09082022_01-2100.jpg"
                    alt=""
                  />
                  <div style={{ marginTop: "-8px" }}>
                    <span>MAX</span>
                    <p>
                      MAX Women Textured Elasticated Waist Flared Corduroy
                      Trousers
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <flex style={{ marginTop: "10px" }}>
                        <span>Qty : </span> <p>2</p>
                      </flex>
                      <flex style={{ marginTop: "10px" }}>
                        <span>Price : </span> <b>₹ 2999</b>
                      </flex>
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src="https://lmsin.net/cdn-cgi/image/h=150,w=150,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011662449-Green-OLIVEGREENP-1000011662449-09082022_01-2100.jpg"
                    alt=""
                  />
                  <div style={{ marginTop: "-8px" }}>
                    <span>MAX</span>
                    <p>
                      MAX Women Textured Elasticated Waist Flared Corduroy
                      Trousers
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <flex style={{ marginTop: "10px" }}>
                        <span>Qty : </span> <p>2</p>
                      </flex>
                      <flex style={{ marginTop: "10px" }}>
                        <span>Price : </span> <b>₹ 2999</b>
                      </flex>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <b>Subtotal:</b>
                <h4>₹ 5998</h4>
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
                <h4>₹ 5998</h4>
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
                    alt=""
                  />
                  <img
                    src="https://i1.lmsin.net/website_images/ae/checkout/logo-mc.png"
                    alt=""
                  />
                  <img
                    src="https://i1.lmsin.net/website_images/in/checkout/logo-rupay.svg"
                    alt=""
                  />
                  <img
                    src="https://i1.lmsin.net/website_images/ae/checkout/logo-cash.png"
                    alt=""
                  />
                  <img
                    src="https://i1.lmsin.net/website_images/in/checkout/logo-netbanking.svg"
                    alt=""
                  />
                  <img
                    src="https://i1.lmsin.net/website_images/in/checkout/logo-wallet.svg"
                    alt=""
                  />
                </flex>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBody;
