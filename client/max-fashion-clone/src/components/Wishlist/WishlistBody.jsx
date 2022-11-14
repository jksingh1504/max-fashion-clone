import React from "react";
import "../../stylesheets/Utilities/container.css";
import "../../stylesheets/cartPage/cartPage.css";
import WishlistCard from "./WishlistCard";
import "../../stylesheets/wishlist/wishlist.css";
import { useState } from "react";

const WishlistBody = () => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("max-wishlist")) || []
  );


  return (
    <div className="container">
      <h2>Your Wishlist</h2>
      <hr />
      <h3 style={{ margin: "16px 0px" }}>{wishlist.length} Products</h3>
      <div className="wishlist">
        <div id="cart_container">
          <div>
            {wishlist.length ? (
              wishlist.map((ele, indx) => <WishlistCard key={indx} ele={ele} setWishlist={setWishlist} />)
            ) : (
              <>
                <img
                  style={{
                    width: "70vw",
                    maxWidth: "500px",
                    minWidth: "320px",
                    display: "inline-flex",
                    margin: "auto",
                  }}
                  src="https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png"
                  alt=""
                />
                <h2>Oops..! you have no products in your wishlist</h2>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistBody;
