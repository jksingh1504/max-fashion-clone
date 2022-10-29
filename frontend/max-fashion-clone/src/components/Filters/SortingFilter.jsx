import React from "react";
import "../../stylesheets/searchFilters/searchFilters.css";

const SortingFilter = () => {
  return (
    <div className="search_filter">
      <div>
        <label htmlFor="lowTohigh">
          <input id="lowTohigh" type="radio" name="sorting_filter" />
          <b>Low-to High</b>
        </label>
      </div>
      <div>
        <label htmlFor="highTolow">
          <input id="highTolow" type="radio" name="sorting_filter" />
          <b>High-to-low</b>
        </label>
      </div>
    </div>
  );
};

export default SortingFilter;
