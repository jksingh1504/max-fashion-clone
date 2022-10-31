import React from "react";
import { Link } from "react-router-dom";

const WomenSubnav = () => {
  const online_exclusives = [
    { content: "Online Exclusives" },
    { content: "Tops", link: "/allproducts_women_Plus-Size" },
    { content: "Indian wear", link: "/allproducts_women_Plus-Size" },
    { content: "Sports wear", link: "/allproducts_women_Plus-Size" },
    { content: "Lingerie", link: "/allproducts_women_Plus-Size" },
    { content: "Dresses", link: "/allproducts_women_Plus-Size" },
    { content: "Bottom wear", link: "/allproducts_women_Plus-Size" },
    { content: "Sleepwear", link: "/allproducts_women_Plus-Size" },
  ];

  const curves = [
    { content: "Curves (Plus Size)" },
    { content: "Tops & Tees", link: "/allproducts_women_Plus-Size" },
    { content: "Dresses", link: "/allproducts_women_Plus-Size" },
    { content: "Kurtas", link: "/allproducts_women_Plus-Size" },
    { content: "Denims", link: "/allproducts_women_Plus-Size" },
    { content: "Sportwear", link: "/allproducts_women_Plus-Size" },
    { content: "lingerie", link: "/allproducts_women_Plus-Size" },
    { content: "Sleepwear", link: "/allproducts_women_Plus-Size" },
  ];

  const Tops = [
    { content: "Tops" },
    { content: "Tops & Tees", link: "/allproducts_women_Plus-Size" },
    { content: "Shirts", link: "/allproducts_women_Plus-Size" },
    { content: "Tunics", link: "/allproducts_women_Plus-Size" },
    { content: "Shrugs", link: "/allproducts_women_Plus-Size" },
    { content: "Zodiac Tees", link: "/allproducts_women_Plus-Size" },
    { content: "Curves", link: "/allproducts_women_Plus-Size" },
  ];

  const Bottoms = [
    { content: "Bottoms" },
    { content: "Jeans & Jeggings", link: "/allproducts_women_Plus-Size" },
    { content: "Trousers & Treggings", link: "/allproducts_women_Plus-Size" },
    { content: "Capris", link: "/allproducts_women_Plus-Size" },
    { content: "Shorts & Skirts", link: "/allproducts_women_Plus-Size" },
    { content: "Leggings", link: "/allproducts_women_Plus-Size" },
    { content: "Fashion Bottoms", link: "/allproducts_women_Plus-Size" },
    { content: "Jeans Curves", link: "/allproducts_women_Plus-Size" },
  ];

  const Dresses = [
    { content: "Dresses & Jumpsuits" },
    { content: "Dresses", link: "/allproducts_women_Plus-Size" },
    { content: "Jumpsuits & Dungerees", link: "/allproducts_women_Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts_women_Plus-Size" },
  ];

  const Sleepwear = [
    { content: "Sleepwear" },
    { content: "Dresses & Gowns", link: "/allproducts_women_Plus-Size" },
    { content: "Kurtas & Sets", link: "/allproducts_women_Plus-Size" },
    { content: "Tops", link: "/allproducts_women_Plus-Size" },
    { content: "Bottoms", link: "/allproducts_women_Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts_women_Plus-Size" },
  ];

  const indian_wear = [
    { content: "Indian Wear" },
    { content: "Kurtas & Kurtis", link: "/allproducts_women_Plus-Size" },
    { content: "Tops", link: "/allproducts_women_Plus-Size" },
    { content: "Dresses", link: "/allproducts_women_Plus-Size" },
    { content: "Suits & Sets", link: "/allproducts_women_Plus-Size" },
    { content: "Palazzos & Culottes", link: "/allproducts_women_Plus-Size" },
    { content: "Salwar & Patialas", link: "/allproducts_women_Plus-Size" },
    { content: "Skirts", link: "/allproducts_women_Plus-Size" },
    { content: "Fashion Bottoms", link: "/allproducts_women_Plus-Size" },
    { content: "Kotis", link: "/allproducts_women_Plus-Size" },
    { content: "Dupattas", link: "/allproducts_women_Plus-Size" },
    { content: "Churidars & leggings", link: "/allproducts_women_Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts_women_Plus-Size" },
  ];

  const Sportswear = [
    { content: "Sportswear" },
    { content: "Tops & Tees", link: "/allproducts_women_Plus-Size" },
    { content: "Trackpants & Joggers", link: "/allproducts_women_Plus-Size" },
    { content: "Shorts & Capris", link: "/allproducts_women_Plus-Size" },
    { content: "Sports Bra", link: "/allproducts_women_Plus-Size" },
  ];

  const Lingerie = [
    { content: "Lingerie" },
    { content: "Bras", link: "/allproducts_women_Plus-Size" },
    { content: "Camisoles", link: "/allproducts_women_Plus-Size" },
    { content: "Panties", link: "/allproducts_women_Plus-Size" },
    { content: "Curves (Plus Size)", link: "/allproducts_women_Plus-Size" },
  ];

  const Accessories = [
    { content: "Accessories" },
    { content: "Face Masks", link: "/allproducts_women_Plus-Size" },
    { content: "Bags", link: "/allproducts_women_Plus-Size" },
    { content: "Caps", link: "/allproducts_women_Plus-Size" },
    { content: "Scarves & Stoles", link: "/allproducts_women_Plus-Size" },
    { content: "Belts", link: "/allproducts_women_Plus-Size" },
    { content: "Wallets & Pouches", link: "/allproducts_women_Plus-Size" },
    { content: "Socks", link: "/allproducts_women_Plus-Size" },
    { content: "Handkerchiefs", link: "/allproducts_women_Plus-Size" },
    { content: "Jewellery", link: "/allproducts_women_Plus-Size" },
    { content: "Hair", link: "/allproducts_women_Plus-Size" },
  ];

  const Footwear = [
    { content: "Footwear" },
    { content: "Bellerinas", link: "/allproducts_women_Plus-Size" },
    { content: "Flat Sandels", link: "/allproducts_women_Plus-Size" },
    { content: "Heels", link: "/allproducts_women_Plus-Size" },
    { content: "Casual Shoes", link: "/allproducts_women_Plus-Size" },
    { content: "Flip Flops", link: "/allproducts_women_Plus-Size" },
    { content: "Sports Shoes", link: "/allproducts_women_Plus-Size" },
    { content: "Boots", link: "/allproducts_women_Plus-Size" },
  ];

  const Winterwear = [
    { content: "Winter Wear" },
    { content: "Sweatshirts & Hoodies", link: "/allproducts_women_Plus-Size" },
    { content: "Swearters & Cardigans", link: "/allproducts_women_Plus-Size" },
    { content: "Dresses", link: "/allproducts_women_Plus-Size" },
    { content: "Jackets", link: "/allproducts_women_Plus-Size" },
  ];

  return (
    <div>
      <div>
        <div>
          {online_exclusives.map((ele, indx) => {
            if (indx === 0) {
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
                  <p style={{ color: "grey" }}>{ele.content}</p>
                </Link>
              );
          })}
        </div>
        <br />
        <div>
          {curves.map((ele, indx) => {
            if (indx === 0) {
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
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
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
                  <p style={{ color: "grey" }}>{ele.content}</p>
                </Link>
              );
          })}
        </div>
        <br />
        <div>
          {Bottoms.map((ele, indx) => {
            if (indx === 0) {
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
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
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
                  <p style={{ color: "grey" }}>{ele.content}</p>
                </Link>
              );
          })}
        </div>
        <br />
        <div>
          {Sleepwear.map((ele, indx) => {
            if (indx === 0) {
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
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
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
                  <p style={{ color: "grey" }}>{ele.content}</p>
                </Link>
              );
          })}
        </div>
        <br />
        <div>
          {Sportswear.map((ele, indx) => {
            if (indx === 0) {
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
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
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
                  <p style={{ color: "grey" }}>{ele.content}</p>
                </Link>
              );
          })}
        </div>
        <br />
        <div>
          {Accessories.map((ele, indx) => {
            if (indx === 0) {
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
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
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
                  <p style={{ color: "grey" }}>{ele.content}</p>
                </Link>
              );
          })}
        </div>
        <br />
        <div>
          {Winterwear.map((ele, indx) => {
            if (indx === 0) {
              return <b key={indx}>{ele.content}</b>;
            } else
              return (
                <Link key={indx} to={ele.link}>
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
