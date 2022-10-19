import React from "react";
import { useState } from "react";
import Accordian from "../Utilities/Accordian";

const FilterComponent = ({ currentFilter }) => {
  const [filterModalHeight, setFilterModalHeight] = useState("0px");
  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => {
          currentFilter.current("0px");
          if (filterModalHeight === "0px") {
            setFilterModalHeight("200px");
            currentFilter.current = setFilterModalHeight;
          } else setFilterModalHeight("0px");
        }}
      >
        <p>Price</p>
        <span className="material-icons">expand_more</span>
      </div>
      <Accordian height={filterModalHeight} style={{ width: "144%" }} />
    </div>
  );
};

export default FilterComponent;
