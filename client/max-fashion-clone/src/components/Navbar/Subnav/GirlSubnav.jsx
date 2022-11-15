import React from "react";
import { Link } from "react-router-dom";

const GirlSubnav = () => {
  const women_subnav_data = [
    [
      { content: "Online Exclusives" },
      { content: "Tops", link: "/allproducts_girls_New-trends" },
      { content: "Dresses", link: "/allproducts_girls_New-trends" },
      { content: "Bottoms", link: "/allproducts_girls_New-trends" },
      { content: "Baby Girls", link: "/allproducts_girls_New-trends" },
      { content: "Essentials", link: "/allproducts_girls_New-trends" },
      { content: "Shoes", link: "/allproducts_girls_New-trends" },
      { content: "Indian wears", link: "/allproducts_girls_New-trends" },
    ],

    [
      { content: "Tops" },
      { content: "Tops & Tees", link: "/allproducts_girls_New-trends" },
      { content: "Shirts", link: "/allproducts_girls_New-trends" },
    ],

    [
      { content: "Bottoms" },
      { content: "Jeans & Jeggings", link: "/allproducts_girls_New-trends" },
      { content: "Leggings", link: "/allproducts_girls_New-trends" },
      { content: "Trousers", link: "/allproducts_girls_New-trends" },
      { content: "Trackpants & Joggers", link: "/allproducts_girls_New-trends" },
      { content: "Shorts & Skirts", link: "/allproducts_girls_New-trends" },
    ],
    [
      { content: "Essentials" },
      { content: "Infant Basics", link: "/allproducts_girls_New-trends" },
      { content: "Innerwear", link: "/allproducts_girls_New-trends" },
      { content: "Sleepwear", link: "/allproducts_girls_New-trends" },
    ],

    [
      { content: "Accessories" },
      { content: "Face Masks", link: "/allproducts_girls_New-trends" },
      {
        content: "Bags",
        link: "/allproducts_girls_New-trends",
      },
      { content: "Caps", link: "/allproducts_girls_New-trends" },
      { content: "Sun Glasses", link: "/allproducts_girls_New-trends" },
      {
        content: "Socks",
        link: "/allproducts_girls_New-trends",
      },
      { content: "Hair", link: "/allproducts_girls_New-trends" },
      { content: "Back to Scool", link: "/allproducts_girls_New-trends" },
    ],
    [],
    [
      { content: "Footwear" },
      { content: "Bellerinas", link: "/allproducts_girls_New-trends" },
      { content: "Sandles & Flip Flops", link: "/allproducts_girls_New-trends" },
      { content: "Casual Shoes", link: "/allproducts_girls_New-trends" },
    ],

    [
      { content: "Indian Wear" },
      { content: "Dresses & Kurtas", link: "/allproducts_girls_New-trends" },
      { content: "Sets", link: "/allproducts_girls_New-trends" },
    ],

    [
      { content: "Baby Girls (0-2 yrs)" },
      {
        content: "Bodysuits & Sleepsuits",
        link: "/allproducts_girls_New-trends",
      },
      { content: "Clothing Sets", link: "/allproducts_girls_New-trends" },
      { content: "Gift Sets", link: "/allproducts_girls_New-trends" },
      { content: "Tops & Tees", link: "/allproducts_girls_New-trends" },
      { content: "Dresses", link: "/allproducts_girls_New-trends" },
      { content: "Pajamas & Leggings", link: "/allproducts_girls_New-trends" },
      { content: "Shorts & Skirts", link: "/allproducts_girls_New-trends" },
      { content: "Trousers & Jeans", link: "/allproducts_girls_New-trends" },
      { content: "Winterwear", link: "/allproducts_girls_New-trends" },
    ],
    [],
    [
      { content: "Winterwear" },
      { content: "Sweatshirts & Hoodies", link: "/allproducts_girls_New-trends" },
      { content: "Sweaters & Cardigans", link: "/allproducts_girls_New-trends" },
      { content: "Jackets", link: "/allproducts_girls_New-trends" },
      { content: "Accessories", link: "/allproducts_girls_New-trends" },
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
