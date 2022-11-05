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
              alt=""
            />
          </div>
          <div>
            <img
              src={home_page_data[activePage].whats_your_style.img_2}
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
              alt=""
            />
          </div>
          <div>
            <img
              src={home_page_data[activePage].whats_your_style.img_4}
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
