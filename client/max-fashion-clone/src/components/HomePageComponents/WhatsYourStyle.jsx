import React from "react";

const WhatsYourStyle = ({ activePage, home_page_data }) => {
  return (
    <>
      <br />
      <br />
      <div className="whats_your_style">
        <h1>What's Your Style</h1>
        <div>
          <div>
            <img
              src={home_page_data[activePage].whats_your_style.img_1}
              loading="lazy"
              alt=""
            />
          </div>
          <div>
            <img
              src={home_page_data[activePage].whats_your_style.img_2}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <br />
        <br />
        <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
        <br />
        <br />
        <br />
        <div>
          <div>
            <img
              src={home_page_data[activePage].whats_your_style.img_3}
              loading="lazy"
              alt=""
            />
          </div>
          <div>
            <img
              src={home_page_data[activePage].whats_your_style.img_4}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default WhatsYourStyle;
