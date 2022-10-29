import React from "react";
import { useRef } from "react";
import "../../stylesheets/ProductPage/filter.css";
import FilterComponent from "./FilterComponent";
import SizeFilter from "../Filters/SizeFilter";
import PriceFilter from "../Filters/PriceFilter";
import BrandFilter from "../Filters/BrandFilter";

const FilterSection = () => {
  const Filters = [
    { filter: "Size", child: <SizeFilter /> },
    { filter: "Brand", child: <BrandFilter /> },
    { filter: "Price", child: <PriceFilter /> },
  ];

  const currentFilter = useRef(() => {
    return "";
  });

  return (
    <>
      <br />
      <br />

      <div className="filter">
        <h3 style={{display:"flex",alignItems:"center",marginLeft:"16px"}}>Filters</h3>
        {Filters.map((ele, indx) => (
          <FilterComponent ele={ele} currentFilter={currentFilter} key={indx} />
        ))}
      </div>
    </>
  );
};

export default FilterSection;
