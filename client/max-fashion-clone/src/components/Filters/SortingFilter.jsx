import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../stylesheets/searchFilters/searchFilters.css";

const SortingFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const size = searchParams.getAll("size");
  const brand = searchParams.getAll("brand");
  const price = searchParams.getAll("price");
  const sort = searchParams.getAll("sort");

  const handleChange = (e) => {
    if (e.target.value !== sort[0])
      setSearchParams({ size, brand, price, sort: [e.target.value] });
    else setSearchParams({ size, brand, price, sort: [] });
  };

  return (
    <div className="search_filter">
      <div>
        <label htmlFor="lowTohigh">
          <input
            value="asc"
            onChange={handleChange}
            id="lowTohigh"
            type="checkbox"
            name="sorting_filter"
            checked={sort.includes("asc")}
          />
          <b>Low-to High</b>
        </label>
      </div>
      <div>
        <label htmlFor="highTolow">
          <input
            value="desc"
            onChange={handleChange}
            id="highTolow"
            type="checkbox"
            name="sorting_filter"
            checked={sort.includes("desc")}
          />
          <b>High-to-low</b>
        </label>
      </div>
    </div>
  );
};

export default SortingFilter;
