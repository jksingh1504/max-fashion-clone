import React from "react";
import { Link } from "react-router-dom";

const MenSubnav = () => {
  const women_subnav_data = [
    [
      { content: "Online Exclusives" },
      { content: "T-shirts", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Sports wear", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Loungewears", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Bottoms", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Shoes", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [],
    [
      { content: "Tops" },
      { content: "T-Shirts", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Polos", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Casual Shirts", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Formal Shirts", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [
      { content: "Bottoms" },
      { content: "Jeans", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Trousers", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Shorts & 3/4ths", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [
      { content: "Sports wear" },
      { content: "Tees & Polos", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Trackpants & Joggers", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Shorts & 3/4ths", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [
      { content: "Loungewear" },
      { content: "Tees", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Bottoms", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Sets", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [
      { content: "Innerwear" },
      { content: "Vests", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Briefs", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Boxers", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [
      { content: "Indian Wear" },
      { content: "Kurtas", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Jackets", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [
      { content: "Accessories" },
      { content: "Face Masks", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      {
        content: "Bags",
        link: "/allproducts_men_Sweatshirts-and-exclusives",
      },
      { content: "Belts", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Caps", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      {
        content: "Wallets",
        link: "/allproducts_men_Sweatshirts-and-exclusives",
      },
      { content: "Socks", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Handkercheifs", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
    [],
    [
      { content: "Footwear" },
      { content: "Casual Shoes", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "sports Shoes", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Sandles & Flip Flop", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],

    [
      { content: "Winter Wears" },
      {
        content: "Sweatshirts & Hoodies",
        link: "/allproducts_men_Sweatshirts-and-exclusives",
      },
      { content: "Sweaters & Cardigans", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Jackets", link: "/allproducts_men_Sweatshirts-and-exclusives" },
      { content: "Accessories", link: "/allproducts_men_Sweatshirts-and-exclusives" },
    ],
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

export default MenSubnav;
