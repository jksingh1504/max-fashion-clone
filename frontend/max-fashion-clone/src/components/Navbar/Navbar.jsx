import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/navbar/navbar.css";
import CartModal from "./CartModal/CartModal";

const Navbar = () => {
  const [cartHeight, setCartHeight] = useState("0px");

  const online_exclusives = [
    { content: "Online Exclusives" },
    { content: "Tops", link: "/" },
    { content: "Indian wear", link: "/" },
    { content: "Sports wear", link: "/" },
    { content: "Lingerie", link: "/" },
    { content: "Dresses", link: "/" },
    { content: "Bottom wear", link: "/" },
    { content: "Sleepwear", link: "/" },
  ];

  const curves = [
    { content: "Curves (Plus Size)" },
    { content: "Tops & Tees", link: "/" },
    { content: "Dresses", link: "/" },
    { content: "Kurtas", link: "/" },
    { content: "Denims", link: "/" },
    { content: "Sportwear", link: "/" },
    { content: "lingerie", link: "/" },
    { content: "Sleepwear", link: "/" },
  ];

  const Tops = [
    { content: "Tops" },
    { content: "Tops & Tees", link: "/" },
    { content: "Shirts", link: "/" },
    { content: "Tunics", link: "/" },
    { content: "Shrugs", link: "/" },
    { content: "Zodiac Tees", link: "/" },
    { content: "Curves", link: "/" },
  ];

  const Bottoms = [
    { content: "Bottoms" },
    { content: "Jeans & Jeggings", link: "/" },
    { content: "Trousers & Treggings", link: "/" },
    { content: "Capris", link: "/" },
    { content: "Shorts & Skirts", link: "/" },
    { content: "Leggings", link: "/" },
    { content: "Fashion Bottoms", link: "/" },
    { content: "Jeans Curves", link: "/" },
  ];

  const Dresses = [
    { content: "Dresses & Jumpsuits" },
    { content: "Dresses", link: "/" },
    { content: "Jumpsuits & Dungerees", link: "/" },
    { content: "Curves (Plus Size)", link: "/" },
  ];

  const Sleepwear = [
    { content: "Sleepwear" },
    { content: "Dresses & Gowns", link: "/" },
    { content: "Kurtas & Sets", link: "/" },
    { content: "Tops", link: "/" },
    { content: "Bottoms", link: "/" },
    { content: "Curves (Plus Size)", link: "/" },
  ];

  const indian_wear = [
    { content: "Indian Wear" },
    { content: "Kurtas & Kurtis", link: "/" },
    { content: "Tops", link: "/" },
    { content: "Dresses", link: "/" },
    { content: "Suits & Sets", link: "/" },
    { content: "Palazzos & Culottes", link: "/" },
    { content: "Salwar & Patialas", link: "/" },
    { content: "Skirts", link: "/" },
    { content: "Fashion Bottoms", link: "/" },
    { content: "Kotis", link: "/" },
    { content: "Dupattas", link: "/" },
    { content: "Churidars & leggings", link: "/" },
    { content: "Curves (Plus Size)", link: "/" },
  ];

  const Sportswear = [
    { content: "Sportswear" },
    { content: "Tops & Tees", link: "/" },
    { content: "Trackpants & Joggers", link: "/" },
    { content: "Shorts & Capris", link: "/" },
    { content: "Sports Bra", link: "/" },
  ];

  const Lingerie = [
    { content: "Lingerie" },
    { content: "Bras", link: "/" },
    { content: "Camisoles", link: "/" },
    { content: "Panties", link: "/" },
    { content: "Curves (Plus Size)", link: "/" },
  ];

  const Accessories = [
    { content: "Accessories" },
    { content: "Face Masks", link: "/" },
    { content: "Bags", link: "/" },
    { content: "Caps", link: "/" },
    { content: "Scarves & Stoles", link: "/" },
    { content: "Belts", link: "/" },
    { content: "Wallets & Pouches", link: "/" },
    { content: "Socks", link: "/" },
    { content: "Handkerchiefs", link: "/" },
    { content: "Jewellery", link: "/" },
    { content: "Hair", link: "/" },
  ];

  const Footwear = [
    { content: "Footwear" },
    { content: "Bellerinas", link: "/" },
    { content: "Flat Sandels", link: "/" },
    { content: "Heels", link: "/" },
    { content: "Casual Shoes", link: "/" },
    { content: "Flip Flops", link: "/" },
    { content: "Sports Shoes", link: "/" },
    { content: "Boots", link: "/" },
  ];

  const Winterwear = [
    { content: "Winter Wear" },
    { content: "Sweatshirts & Hoodies", link: "/" },
    { content: "Swearters & Cardigans", link: "/" },
    { content: "Dresses", link: "/" },
    { content: "Jackets", link: "/" },
  ];

  return (
    <>
      <div id="navbar">
        <div className="nav_child_1">
          <h1
            style={{
              margin: "-10px 0px 0px",
              fontSize: "38px",
              padding: "0px",
              color: "#303ab2",
              fontWeight: "700",
            }}
          >
            ma<span style={{ color: "#e4002b" }}>x</span>
          </h1>
          <div className="women">
            <b>Women</b>
            <div>
              <div>
                <div>
                  <div>
                    {online_exclusives.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                  <br />
                  <div>
                    {curves.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                </div>
                <div>
                  <div>
                    {Tops.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                  <br />
                  <div>
                    {Bottoms.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                </div>
                <div>
                  <div>
                    {Dresses.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                  <br />
                  <div>
                    {Sleepwear.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                </div>
                <div>
                  <div>
                    {indian_wear.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                  <br />
                  <div>
                    {Sportswear.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                </div>
                <div>
                  <div>
                    {Lingerie.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                  <br />
                  <div>
                    {Accessories.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                </div>
                <div>
                  <div>
                    {Footwear.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                  <br />
                  <div>
                    {Winterwear.map((ele, indx) => {
                      if (indx === 0) {
                        return <b>{ele.content}</b>;
                      } else
                        return (
                          <Link to={ele.link}>
                            <p style={{ color: "grey" }}>{ele.content}</p>
                          </Link>
                        );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="men">
            <b>Men</b>
            <div>
              <div>write sub nav html here</div>
            </div>
          </div>
          <div className="girls">
            <b>Girls</b>
            <div>
              <div></div>
            </div>
          </div>
          <div className="boys">
            <b>Boys</b>
            <div>
              <div>write sub nav html here</div>
            </div>
          </div>
        </div>
        <div className="nav_child_2">
          <span className="material-icons">search</span>
          <input type="text" placeholder="What are you lookin for?" />
        </div>
        <div className="nav_child_3">
          <div>
            <b>Sign-up / Sign-in</b>
          </div>
          <div>
            <span
              style={{ display: "inline-block", marginTop: "6px" }}
              class="material-icons"
            >
              favorite_border
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <span
              style={{ display: "inline-block", marginTop: "4px" }}
              onClick={() => {
                if (cartHeight === "0px") setCartHeight("480px");
                else setCartHeight("0px");
              }}
              className="material-icons"
            >
              shopping_bag
            </span>
            <span
              onClick={() => {
                if (cartHeight === "0px") setCartHeight("480px");
                else setCartHeight("0px");
              }}
              className="cart_count"
            >
              3
            </span>
            <CartModal height={cartHeight} />
          </div>
        </div>
      </div>
      <div className="offer_nav">
        <p>
          made with ❤️ by Jyoti Kamal Singh, 2022 All Rights Reseved
        </p>
      </div>
    </>
  );
};

export default Navbar;
