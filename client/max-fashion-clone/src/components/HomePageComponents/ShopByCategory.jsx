import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/HomePage/shopByCategory.css";

const ShopByCategory = ({ home_page_data, activePage }) => {
  return (
    <>
      <div
        className="end_seperator"
        style={{ margin: "auto", maxWidth: "1250px", width: "95%" }}
      >
        <picture>
          <source
            srcSet="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-COMMONFREESHIP-20SEP2022.gif"
            media="(min-width: 600px)"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/Mobile-department-modularblock-oneBytwo1A-COMMONFREESHIP-20SOCT022.gif"
            loading="lazy"
            alt=""
          />
        </picture>
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
      <br />
      <br />
      <h1>Shop By Category</h1>
      <div className="shop_by_category">
        {home_page_data[activePage].shop_by_category.map((ele, indx) => (
          <div key={indx}>
            <Link to={ele.link}>
              <img src={ele.img_url} loading="lazy" alt="img_2" />
            </Link>
            <h3>{ele.title}</h3>
          </div>
        ))}
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
    </>
  );
};

export default ShopByCategory;
