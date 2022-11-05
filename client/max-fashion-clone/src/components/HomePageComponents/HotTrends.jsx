import React from "react";
import "../../stylesheets/HomePage/TopStores.css";

const HotTrends = () => {
  return (
    <>
      <br />
      <br />
      <div className="hot_trends">
        <h1>Hot Trends</h1>
        <div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-A-Women-29SEP2022.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-B-Womenn-29SEP2022.png"
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
            srcSet="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-9modularblock-oneBythree-A-Women-15SEP2022.png"
            media="(min-width: 600px)"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=500,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/Mobile-department-9modularblock-oneBythree-A-Women-31OCT22.png"
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
