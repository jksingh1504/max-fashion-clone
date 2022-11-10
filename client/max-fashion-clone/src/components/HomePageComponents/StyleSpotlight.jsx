import React from "react";
import "../../stylesheets/HomePage/styleSection.css";

const StyleSpotlight = ({ activePage, home_page_data }) => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="style_spotlight">
        <h1>Style Spotlight</h1>
        <div>
          <div>
            <img
              src={home_page_data[activePage].style_spotlight.img_1}
              loading="lazy"
              alt=""
            />
          </div>
          <div>
            <img
              src={home_page_data[activePage].style_spotlight.img_2}
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

export default StyleSpotlight;
