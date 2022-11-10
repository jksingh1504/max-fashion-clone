import React, { useRef } from "react";
import { useEffect } from "react";
import "../../stylesheets/HomePage/slider.css";

const Slider = ({ props }) => {
  const {
    count,
    next_slide,
    prev_slide,
    setCount,
    activePage,
    home_page_data,
  } = props;
  const slideRef = useRef(null);
  // console.log(home_page_data)

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
                  srcSet={home_page_data[activePage].slider.pc_1}
                  media="(min-width: 600px)"
                />
                <img
                  src={home_page_data[activePage].slider.mobile_1}
                  loading="lazy"
                  alt="slide_1"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  srcSet={home_page_data[activePage].slider.pc_2}
                  media="(min-width: 600px)"
                />
                <img
                  src={home_page_data[activePage].slider.mobile_2}
                  loading="lazy"
                  alt="slide_2"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  srcSet={home_page_data[activePage].slider.pc_3}
                  media="(min-width: 600px)"
                />
                <img
                  src={home_page_data[activePage].slider.mobile_3}
                  loading="lazy"
                  alt="slide_3"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  srcSet={home_page_data[activePage].slider.pc_4}
                  media="(min-width: 600px)"
                />
                <img
                  src={home_page_data[activePage].slider.mobile_4}
                  loading="lazy"
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
