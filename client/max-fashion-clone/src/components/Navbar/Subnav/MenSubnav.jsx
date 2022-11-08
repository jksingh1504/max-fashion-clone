import React from "react";
import { Link } from "react-router-dom";

const MenSubnav = () => {
  const women_subnav_data = [
    [
      { content: "Online Exclusives" },
      { content: "Tops", link: "/?page=women" },
      { content: "Sports wear", link: "/allproducts_women_Plus-Size" },
      { content: "Loungewears", link: "/allproducts_women_Plus-Size" },
      { content: "Bottoms", link: "/allproducts_women_Plus-Size" },
      { content: "Shoes", link: "/allproducts_women_Plus-Size" },
    ],
    [],
    [
      { content: "Tops" },
      { content: "T-Shirts", link: "/allproducts_women_Plus-Size" },
      { content: "Polos", link: "/allproducts_women_Plus-Size" },
      { content: "Casual Shirts", link: "/allproducts_women_Plus-Size" },
      { content: "Formal Shirts", link: "/allproducts_women_Plus-Size" },
    ],
    [
      { content: "Bottoms" },
      { content: "Jeans", link: "/allproducts_women_Plus-Size" },
      { content: "Trousers", link: "/allproducts_women_Plus-Size" },
      { content: "Shorts & 3/4ths", link: "/allproducts_women_Plus-Size" },
    ],
    [
      { content: "Sports wear" },
      { content: "Tees & Polos", link: "/allproducts_women_Plus-Size" },
      { content: "Trackpants & Joggers", link: "/allproducts_women_Plus-Size" },
      { content: "Shorts & 3/4ths", link: "/allproducts_women_Plus-Size" },
    ],
    [
      { content: "Loungewear" },
      { content: "Tees", link: "/allproducts_women_Plus-Size" },
      { content: "Bottoms", link: "/allproducts_women_Plus-Size" },
      { content: "Sets", link: "/allproducts_women_Plus-Size" },
    ],
    [
      { content: "Innerwear" },
      { content: "Vests", link: "/allproducts_women_Plus-Size" },
      { content: "Briefs", link: "/allproducts_women_Plus-Size" },
      { content: "Boxers", link: "/allproducts_women_Plus-Size" },
    ],
    [
      { content: "Indian Wear" },
      { content: "Kurtas", link: "/allproducts_women_Plus-Size" },
      { content: "Jackets", link: "/allproducts_women_Plus-Size" },
    ],
    [
      { content: "Accessories" },
      { content: "Face Masks", link: "/allproducts_women_Plus-Size" },
      {
        content: "Bags",
        link: "/allproducts_women_Plus-Size",
      },
      { content: "Belts", link: "/allproducts_women_Plus-Size" },
      { content: "Caps", link: "/allproducts_women_Plus-Size" },
      {
        content: "Wallets",
        link: "/allproducts_women_Plus-Size",
      },
      { content: "Socks", link: "/allproducts_women_Plus-Size" },
      { content: "Handkercheifs", link: "/allproducts_women_Plus-Size" },
    ],
    [],
    [
      { content: "Footwear" },
      { content: "Casual Shoes", link: "/allproducts_women_Plus-Size" },
      { content: "sports Shoes", link: "/allproducts_women_Plus-Size" },
      { content: "Sandles & Flip Flop", link: "/allproducts_women_Plus-Size" },
    ],

    [
      { content: "Winter Wears" },
      {
        content: "Sweatshirts & Hoodies",
        link: "/allproducts_women_Plus-Size",
      },
      { content: "Sweaters & Cardigans", link: "/allproducts_women_Plus-Size" },
      { content: "Jackets", link: "/allproducts_women_Plus-Size" },
      { content: "Accessories", link: "/allproducts_women_Plus-Size" },
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
