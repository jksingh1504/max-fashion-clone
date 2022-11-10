import React from "react";
import "../../stylesheets/HomePage/TopStores.css";

const TopStores = ({ activePage, home_page_data }) => {
  return (
    <>
      <br />
      <br />
      <div className="top_stores">
        <h1>Top Stores</h1>
        <div>
          <div>
            <img
              src={home_page_data[activePage].top_stores.img_1}
              loading="lazy"
              alt=""
            />
          </div>
          <div>
            <img
              src={home_page_data[activePage].top_stores.img_2}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
    </>
  );
};

export default TopStores;
