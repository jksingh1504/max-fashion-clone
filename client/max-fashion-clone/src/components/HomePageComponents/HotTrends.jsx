import React from "react";
import "../../stylesheets/HomePage/TopStores.css";

const HotTrends = ({ activePage, home_page_data }) => {
  return (
    <>
      <br />
      <br />
      <div className="hot_trends">
        <h1>Hot Trends</h1>
        <div>
          <div>
            <img
              loading="lazy"
              src={home_page_data[activePage].hot_trends.img_1}
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={home_page_data[activePage].hot_trends.img_2}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
      <br />
      <br />
      <br />
      <div
        className="end_seperator"
        style={{ margin: "auto", maxWidth: "1250px", width: "95%" }}
      >
        <picture>
          <source
            loading="lazy"
            srcSet={home_page_data[activePage].devider.img_1}
            media="(min-width: 600px)"
          />
          <img
            loading="lazy"
            src={home_page_data[activePage].devider.img_2}
            alt=""
          />
        </picture>
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
    </>
  );
};

export default HotTrends;
