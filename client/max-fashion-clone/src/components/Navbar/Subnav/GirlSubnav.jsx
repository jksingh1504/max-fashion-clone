import React from "react";
import { Link } from "react-router-dom";

const GirlSubnav = () => {
  const women_subnav_data = [
    [
      { content: "Online Exclusives" },
      { content: "Tops", link: "/?page=women" },
      { content: "Dresses", link: "/allproducts_women_Plus-Size" },
      { content: "Bottoms", link: "/allproducts_women_Plus-Size" },
      { content: "Baby Girls", link: "/allproducts_women_Plus-Size" },
      { content: "Essentials", link: "/allproducts_women_Plus-Size" },
      { content: "Shoes", link: "/allproducts_women_Plus-Size" },
      { content: "Indian wears", link: "/allproducts_women_Plus-Size" },
    ],

    [
      { content: "Tops" },
      { content: "Tops & Tees", link: "/allproducts_women_Plus-Size" },
      { content: "Shirts", link: "/allproducts_women_Plus-Size" },
    ],

    [
      { content: "Bottoms" },
      { content: "Jeans & Jeggings", link: "/allproducts_women_Plus-Size" },
      { content: "Leggings", link: "/allproducts_women_Plus-Size" },
      { content: "Trousers", link: "/allproducts_women_Plus-Size" },
      { content: "Trackpants & Joggers", link: "/allproducts_women_Plus-Size" },
      { content: "Shorts & Skirts", link: "/allproducts_women_Plus-Size" },
    ],
    [
      { content: "Essentials" },
      { content: "Infant Basics", link: "/allproducts_women_Plus-Size" },
      { content: "Innerwear", link: "/allproducts_women_Plus-Size" },
      { content: "Sleepwear", link: "/allproducts_women_Plus-Size" },
    ],

    [
      { content: "Accessories" },
      { content: "Face Masks", link: "/allproducts_women_Plus-Size" },
      {
        content: "Bags",
        link: "/allproducts_women_Plus-Size",
      },
      { content: "Caps", link: "/allproducts_women_Plus-Size" },
      { content: "Sun Glasses", link: "/allproducts_women_Plus-Size" },
      {
        content: "Socks",
        link: "/allproducts_women_Plus-Size",
      },
      { content: "Hair", link: "/allproducts_women_Plus-Size" },
      { content: "Back to Scool", link: "/allproducts_women_Plus-Size" },
    ],
    [],
    [
      { content: "Footwear" },
      { content: "Bellerinas", link: "/allproducts_women_Plus-Size" },
      { content: "Sandles & Flip Flops", link: "/allproducts_women_Plus-Size" },
      { content: "Casual Shoes", link: "/allproducts_women_Plus-Size" },
    ],

    [
      { content: "Indian Wear" },
      { content: "Dresses & Kurtas", link: "/allproducts_women_Plus-Size" },
      { content: "Sets", link: "/allproducts_women_Plus-Size" },
    ],

    [
      { content: "Baby Girls (0-2 yrs)" },
      {
        content: "Bodysuits & Sleepsuits",
        link: "/allproducts_women_Plus-Size",
      },
      { content: "Clothing Sets", link: "/allproducts_women_Plus-Size" },
      { content: "Gift Sets", link: "/allproducts_women_Plus-Size" },
      { content: "Tops & Tees", link: "/allproducts_women_Plus-Size" },
      { content: "Dresses", link: "/allproducts_women_Plus-Size" },
      { content: "Pajamas & Leggings", link: "/allproducts_women_Plus-Size" },
      { content: "Shorts & Skirts", link: "/allproducts_women_Plus-Size" },
      { content: "Trousers & Jeans", link: "/allproducts_women_Plus-Size" },
      { content: "Winterwear", link: "/allproducts_women_Plus-Size" },
    ],
    [],
    [
      { content: "Winterwear" },
      { content: "Sweatshirts & Hoodies", link: "/allproducts_women_Plus-Size" },
      { content: "Sweaters & Cardigans", link: "/allproducts_women_Plus-Size" },
      { content: "Jackets", link: "/allproducts_women_Plus-Size" },
      { content: "Accessories", link: "/allproducts_women_Plus-Size" },
    ],

    [],
  ];

  return (
    <div>
      {new Array(6).fill(1).map((ele, index) => {
        return (
          <div key={index}>
            {
              <>
                <div>
                  {women_subnav_data[2 * index].map((ele, indx) => {
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
              </>
            }
            {
              <div>
                {women_subnav_data[2 * index + 1].map((ele, indx) => {
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
            }
          </div>
        );
      })}
    </div>
  );
};

export default GirlSubnav;
