import React from "react";

const YouthStore = ({ activePage, home_page_data }) => {
  return (
    <>
      <br />
      <br />
      <div>
        <h1>Youth Store</h1>
        <div
          style={{ margin: "auto", maxWidth: "1280px", padding: "0px 16px" }}
        >
          <img
            src={home_page_data[activePage].youth_store}
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
    </>
  );
};

export default YouthStore;
