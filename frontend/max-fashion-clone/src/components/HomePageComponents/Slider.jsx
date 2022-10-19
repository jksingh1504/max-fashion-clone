import React from "react";
import "../../stylesheets/HomePage/slider.css";

const Slider = ({ props }) => {
  const { count, next_slide, prev_slide, setCount } = props;

  return (
    <>
      <br />
      <div id="slider_container">
        <span onClick={() => prev_slide()} className="material-icons">
          arrow_back_ios
        </span>
        <div id="slider">
          <div style={{ transform: `translateX(-${count * 100}%)` }}>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-Women-23SEP2022A.png"
                alt="slide_1"
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner2-desktop-Women-23SEP2022.png"
                alt="slide_2"
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktop-Women-23SEP2022.png"
                alt="slide_3"
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner3-desktopp-Women-29SEP2022.png"
                alt="slide_4"
              />
            </div>
          </div>
        </div>
        <span onClick={() => next_slide()} className="material-icons">
          arrow_forward_ios
        </span>
      </div>
      <div id="slider_navigator">
        <div onClick={() => setCount(0)}>
          <hr className={count === 0 ? "active_slide" : ""} />
        </div>
        <div onClick={() => setCount(1)}>
          <hr className={count === 1 ? "active_slide" : ""} />
        </div>
        <div onClick={() => setCount(2)}>
          <hr className={count === 2 ? "active_slide" : ""} />
        </div>
        <div onClick={() => setCount(3)}>
          <hr className={count === 3 ? "active_slide" : ""} />
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Slider;
