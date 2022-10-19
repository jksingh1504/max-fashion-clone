import React from "react";
import { useRef } from "react";
import "../../stylesheets/ProductPage/filter.css";
import FilterComponent from "./FilterComponent";

const FilterSection = () => {
  const Filters = [
    { filter: "price" },
    { filter: "brand" },
    { filter: "alphabet" },
    "",
    "",
    "",
  ];

  const currentFilter = useRef(() => {
    return "";
  });

  return (
    <>
      <br />
      <br />
      <div className="filter">
        {Filters.map((ele, indx) => (
          <FilterComponent currentFilter={currentFilter} key={indx} />
        ))}
      </div>
    </>
  );
};

export default FilterSection;
