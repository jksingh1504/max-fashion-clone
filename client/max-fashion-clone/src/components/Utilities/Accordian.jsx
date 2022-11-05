import React from "react";
import "../../stylesheets/Utilities/accordian.css";
import SizeFilter from "../Filters/SizeFilter";

const Accordian = ({ children, height = "0px", style }) => {

  return (
    <div
      style={{
        height: height,
        ...style,
      }}
      className="accordian"
    >
      {children}
    </div>
  );
};

export default Accordian;
