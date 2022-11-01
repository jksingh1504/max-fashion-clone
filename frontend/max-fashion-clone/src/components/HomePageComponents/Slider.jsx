import React, { useRef } from "react";
import { useEffect } from "react";
import "../../stylesheets/HomePage/slider.css";

const Slider = ({ props }) => {
  const { count, next_slide, prev_slide, setCount } = props;
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current = setInterval(() => {
      next_slide();
    }, 2000);

    return () => {
      clearInterval(slideRef.current);
    };
  }, [slideRef, next_slide]);

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
              <picture>
                <source
                  srcSet="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner2-desktop-Women-27OCT22.gif"
                  media="(min-width: 600px)"
                />
                <img
                  src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner2-mobile-Women-27OCT22.gif"
                  alt="slide_1"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  srcSet="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-Women-21OCT22.gif"
                  media="(min-width: 600px)"
                />
                <img
                  src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-mobile-Women-21OCT22.gif"
                  alt="slide_2"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  srcSet="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner3-desktopp-Women-27OCT22.png"
                  media="(min-width: 600px)"
                />
                <img
                  src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner3-mob-Women-27OCT22.png"
                  alt="slide_3"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  srcSet="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktop-Women-27OCT22.png"
                  media="(min-width: 600px)"
                />
                <img
                  src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-mobile-Women-27OCT22.png"
                  alt="slide_4"
                />
              </picture>
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
