import React from "react";
import "../../stylesheets/HomePage/TopStores.css";

const TopStores = () => {
  return (
    <>
      <br />
      <br />
      <div className="top_stores">
        <h1>Top Stores</h1>
        <div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-Women-modularblock8-oneBythree-A-Women-29SEP2022.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-B-Women-29SEP2022.png"
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
