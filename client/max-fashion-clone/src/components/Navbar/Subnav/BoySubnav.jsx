import React from "react";
import { Link } from "react-router-dom";

const BoySubnav = () => {
  const women_subnav_data = [
    [
      { content: "Online Exclusives" },
      { content: "Bottoms", link: "/allproducts_boys_Online-exclusives" },
      { content: "Baby Boys", link: "/allproducts_boys_Online-exclusives" },
      { content: "Essentials", link: "/allproducts_boys_Online-exclusives" },
      { content: "Shoes", link: "/allproducts_boys_Online-exclusives" },
      { content: "Indian wears", link: "/allproducts_boys_Online-exclusives" },
    ],

    [
      { content: "Tops" },
      { content: "Tees & Polos", link: "/allproducts_boys_Online-exclusives" },
      { content: "Shirts", link: "/allproducts_boys_Online-exclusives" },
    ],

    [
      { content: "Bottoms" },
      { content: "Jeans", link: "/allproducts_boys_Online-exclusives" },
      { content: "Trousers", link: "/allproducts_boys_Online-exclusives" },
      { content: "Trackpants & Joggers", link: "/allproducts_boys_Online-exclusives" },
      { content: "Shorts & 3/4ths", link: "/allproducts_boys_Online-exclusives" },
    ],
    [
      { content: "Essentials" },
      { content: "Infant Basics", link: "/allproducts_boys_Online-exclusives" },
      { content: "Innerwear", link: "/allproducts_boys_Online-exclusives" },
      { content: "Sleepwear", link: "/allproducts_boys_Online-exclusives" },
    ],

    [
      { content: "Accessories" },
      { content: "Face Masks", link: "/allproducts_boys_Online-exclusives" },
      {
        content: "Bags",
        link: "/allproducts_boys_Online-exclusives",
      },
      { content: "Caps", link: "/allproducts_boys_Online-exclusives" },
      { content: "Sun Glasses", link: "/allproducts_boys_Online-exclusives" },
      {
        content: "Socks",
        link: "/allproducts_boys_Online-exclusives",
      },
      { content: "Hair", link: "/allproducts_boys_Online-exclusives" },
      { content: "Back to Scool", link: "/allproducts_boys_Online-exclusives" },
      { content: "Soft Toys", link: "/allproducts_boys_Online-exclusives" },
    ],
    [],
    [
      { content: "Footwear" },
      { content: "Boots", link: "/allproducts_boys_Online-exclusives" },
      { content: "Sandles & Flip Flops", link: "/allproducts_boys_Online-exclusives" },
      { content: "Casual Shoes", link: "/allproducts_boys_Online-exclusives" },
    ],

    [
      { content: "Indian Wear" },
      { content: "Kurtas & Jackets", link: "/allproducts_boys_Online-exclusives" },
      { content: "Sets", link: "/allproducts_boys_Online-exclusives" },
    ],

    [
      { content: "Baby Girls (0-2 yrs)" },
      {
        content: "Bodysuits & Sleepsuits",
        link: "/allproducts_boys_Online-exclusives",
      },
      { content: "Clothing Sets", link: "/allproducts_boys_Online-exclusives" },
      { content: "Gift Sets", link: "/allproducts_boys_Online-exclusives" },
      { content: "Tees & Polos", link: "/allproducts_boys_Online-exclusives" },
      { content: "Dresses", link: "/allproducts_boys_Online-exclusives" },
      { content: "Pajamas", link: "/allproducts_boys_Online-exclusives" },
      { content: "Shorts & Skirts", link: "/allproducts_boys_Online-exclusives" },
      { content: "Trousers & Jeans", link: "/allproducts_boys_Online-exclusives" },
      { content: "Winterwear", link: "/allproducts_boys_Online-exclusives" },
    ],
    [],
    [
      { content: "Winterwear" },
      {
        content: "Sweatshirts & Hoodies",
        link: "/allproducts_boys_Online-exclusives",
      },
      { content: "Sweaters & Cardigans", link: "/allproducts_boys_Online-exclusives" },
      { content: "Jackets", link: "/allproducts_boys_Online-exclusives" },
      { content: "Accessories", link: "/allproducts_boys_Online-exclusives" },
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

export default BoySubnav;
