import React from "react";
import "../../stylesheets/Utilities/accordian.css"

const Accordian = ({ height = "0px",style }) => {
    
  return (
    <div
      style={{
        height: height,
        ...style
      }}
      className="accordian"
    >
      <div>write your code here</div>
    </div>
  );
};

export default Accordian;
