import React from "react";
import { Link } from "react-router-dom";

const WomenSubnav = () => {
  const online_exclusives = [
    { content: "Online Exclusives" },
    { content: "Tops", link: "/allproducts/women/Plus-Size" },
    { content: "Indian wear", link: "/allproducts/women/Plus-Size" },
    { content: "Sports wear", link: "/allproducts/women/Plus-Size" },
    { content: "Lingerie", link: "/allproducts/women/Plus-Size" },
    { content: "Dresses", link: "/allproducts/women/Plus-Size" },
    { content: "Bottom wear", link: "/allproducts/women/Plus-Size" },
    { content: "Sleepwear", link: "/allproducts/women/Plus-Size" },
  ];

  const curves = [
    { content: "Curves (Plus Size)" },
    { content: "Tops & Tees", link: "/allproducts/women/Plus-Size" },
    { content: "Dresses", link: "/allproducts/women/Plus-Size" },
    { content: "Kurtas", link: "/allproducts/women/Plus-Size" },
    { content: "Denims", link: "/allproducts/women/Plus-Size" },
    { content: "Sportwear", link: "/allproducts/women/Plus-Size" },
    { content: "lingerie", link: "/allproducts/women/Plus-Size" },
    { content: "Sleepwear", link: "/allproducts/women/Plus-Size" },
  ];

  const Tops = [
    { content: "Tops" },
    { content: "Tops & Tees", link: "/allproducts/women/Plus-Size" },
    { content: "Shirts", link: "/allproducts/women/Plus-Size" },
    { content: "Tunics", link: "/allproducts/women/Plus-Size" },
    { content: "Shrugs", link: "/allproducts/women/Plus-Size" },
    { content: "Zodiac Tees", link: "/allproducts/women/Plus-Size" },
    { content: "Curves", link: "/allproducts/women/Plus-Size" },
  ];

  const Bottoms = [
    { content: "Bottoms" },
    { content: "Jeans & Jeggings", link: "/allproducts/women/Plus-Size" },
    { content: "Trousers & Treggings", link: "/allproducts/women/Plus-Size" },
    { content: "Capris", link: "/allproducts/women/Plus-Size" },
    { content: "Shorts & Skirts", link: "/allproducts/women/Plus-Size" },
    { content: "Leggings", link: "/allproducts/women/Plus-Size" },
    { content: "Fashion Bottoms", link: "/allproducts/women/Plus-Size" },
    { content: "Jeans Curves", link: "/allproducts/women/Plus-Size" },
  ];

  const Dresses = [
    { content: "Dresses & Jumpsuits" },
    { content: "Dresses", link: "/allproducts/women/Plus-Size" },
    { content: "Jumpsuits & Dungerees", link: "/allproducts/women/Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts/women/Plus-Size" },
  ];

  const Sleepwear = [
    { content: "Sleepwear" },
    { content: "Dresses & Gowns", link: "/allproducts/women/Plus-Size" },
    { content: "Kurtas & Sets", link: "/allproducts/women/Plus-Size" },
    { content: "Tops", link: "/allproducts/women/Plus-Size" },
    { content: "Bottoms", link: "/allproducts/women/Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts/women/Plus-Size" },
  ];

  const indian_wear = [
    { content: "Indian Wear" },
    { content: "Kurtas & Kurtis", link: "/allproducts/women/Plus-Size" },
    { content: "Tops", link: "/allproducts/women/Plus-Size" },
    { content: "Dresses", link: "/allproducts/women/Plus-Size" },
    { content: "Suits & Sets", link: "/allproducts/women/Plus-Size" },
    { content: "Palazzos & Culottes", link: "/allproducts/women/Plus-Size" },
    { content: "Salwar & Patialas", link: "/allproducts/women/Plus-Size" },
    { content: "Skirts", link: "/allproducts/women/Plus-Size" },
    { content: "Fashion Bottoms", link: "/allproducts/women/Plus-Size" },
    { content: "Kotis", link: "/allproducts/women/Plus-Size" },
    { content: "Dupattas", link: "/allproducts/women/Plus-Size" },
    { content: "Churidars & leggings", link: "/allproducts/women/Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts/women/Plus-Size" },
  ];

  const Sportswear = [
    { content: "Sportswear" },
    { content: "Tops & Tees", link: "/allproducts/women/Plus-Size" },
    { content: "Trackpants & Joggers", link: "/allproducts/women/Plus-Size" },
    { content: "Shorts & Capris", link: "/allproducts/women/Plus-Size" },
    { content: "Sports Bra", link: "/allproducts/women/Plus-Size" },
  ];

  const Lingerie = [
    { content: "Lingerie" },
    { content: "Bras", link: "/allproducts/women/Plus-Size" },
    { content: "Camisoles", link: "/allproducts/women/Plus-Size" },
    { content: "Panties", link: "/allproducts/women/Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts/women/Plus-Size" },
  ];

  const Accessories = [
    { content: "Accessories" },
    { content: "Face Masks", link: "/allproducts/women/Plus-Size" },
    { content: "Bags", link: "/allproducts/women/Plus-Size" },
    { content: "Caps", link: "/allproducts/women/Plus-Size" },
    { content: "Scarves & Stoles", link: "/allproducts/women/Plus-Size" },
    { content: "Belts", link: "/allproducts/women/Plus-Size" },
    { content: "Wallets & Pouches", link: "/allproducts/women/Plus-Size" },
    { content: "Socks", link: "/allproducts/women/Plus-Size" },
    { content: "Handkerchiefs", link: "/allproducts/women/Plus-Size" },
    { content: "Jewellery", link: "/allproducts/women/Plus-Size" },
    { content: "Hair", link: "/allproducts/women/Plus-Size" },
  ];

  const Footwear = [
    { content: "Footwear" },
    { content: "Bellerinas", link: "/allproducts/women/Plus-Size" },
    { content: "Flat Sandels", link: "/allproducts/women/Plus-Size" },
    { content: "Heels", link: "/allproducts/women/Plus-Size" },
    { content: "Casual Shoes", link: "/allproducts/women/Plus-Size" },
    { content: "Flip Flops", link: "/allproducts/women/Plus-Size" },
    { content: "Sports Shoes", link: "/allproducts/women/Plus-Size" },
    { content: "Boots", link: "/allproducts/women/Plus-Size" },
  ];

  const Winterwear = [
    { content: "Winter Wear" },
    { content: "Sweatshirts & Hoodies", link: "/allproducts/women/Plus-Size" },
    { content: "Swearters & Cardigans", link: "/allproducts/women/Plus-Size" },
    { content: "Dresses", link: "/allproducts/women/Plus-Size" },
    { content: "Jackets", link: "/allproducts/women/Plus-Size" },
  ];

  return (
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
  );
};

export default WomenSubnav;
