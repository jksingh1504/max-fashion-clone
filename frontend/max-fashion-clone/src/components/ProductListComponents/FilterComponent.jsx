import React from "react";
import { useState } from "react";
import Accordian from "../Utilities/Accordian";

const FilterComponent = ({ ele, currentFilter }) => {
  const [filterModalHeight, setFilterModalHeight] = useState("0px");

  const close_accordian = () => {
    currentFilter.current("0px")
    if (filterModalHeight === "0px") {
      setFilterModalHeight("200px");
      currentFilter.current = setFilterModalHeight;
    } else setFilterModalHeight("0px");
  };

  return (
    <div style={{ position: "relative" }}>
      <div onClick={close_accordian}>
        <p>{ele.filter}</p>
        <span className="material-icons">expand_more</span>
      </div>
      <Accordian
        close_accordian={close_accordian}
        height={filterModalHeight}
        style={{ width: "105%" }}
      >
        {ele.child}
      </Accordian>
    </div>
  );
};

export default FilterComponent;
