import React from "react";
import "../../stylesheets/HomePage/styleSection.css";

const StyleSpotlight = () => {
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
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-A-Women-06OCT22.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-B-Women-06OCT22.png"
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
