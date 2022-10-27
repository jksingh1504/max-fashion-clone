import React from "react";
import "../../stylesheets/cartPage/cartCard.css";
import "../../stylesheets/Utilities/flex.css";

const CartCard = () => {
  return (
    <div className="cart_card">
      <div>
        <div>
          <img
            style={{ height: "100%" }}
            src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011662449-Green-OLIVEGREENP-1000011662449-09082022_01-2100.jpg"
            alt="img"
          />
        </div>
        <div style={{ marginTop: "-6px" }}>
          <b>MAX Women Textured Elasticated Waist Flared Corduroy Trousers</b>
          <br />
          <b style={{ marginTop: "14px" }}>₹1299</b>
          <flex
            style={{
              marginTop: "26px",
            }}
          >
            <p style={{ color: "grey" }}>Color:</p> <p style={{marginLeft:"10px"}}>Green</p>
          </flex>
          <flex>
            <p style={{ color: "grey" }}>Size:</p>
            <p style={{marginLeft:"20px"}}>6XL</p>
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
          <select name="qty" id="qty">
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
            <option value="3">Qty: 3</option>
            <option value="4">Qty: 4</option>
            <option value="5">Qty: 5</option>
          </select>
          <span class="material-icons">arrow_drop_down</span>
        </div>
      </flex>
      <hr />
      <div>
        <div>
          <p>Remove</p>
        </div>
        <div>
          <p>Move to Favourites</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
