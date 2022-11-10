import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../stylesheets/searchFilters/searchFilters.css";

const PriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const size = searchParams.getAll("size");
  const brand = searchParams.getAll("brand");
  const price = searchParams.getAll("price");
  const sort = searchParams.getAll("sort");

  const handleChange = (e) => {
    if (e.target.value !== price[0])
      setSearchParams({ size, brand, price: [e.target.value] });
    else setSearchParams({ size, brand, price: [],sort });
  };

  return (
    <div className="search_filter">
      <div>
        <label htmlFor="lt500">
          <input
            onChange={handleChange}
            value="lt500"
            checked={price.includes("lt500")}
            id="lt500"
            type="checkbox"
            name="price_filter"
          />
          <b>Less than 500</b>
        </label>
      </div>
      <div>
        <label htmlFor="500to1000">
          <input
            onChange={handleChange}
            value="500-to-1000"
            checked={price.includes("500-to-1000")}
            id="500to1000"
            type="checkbox"
            name="price_filter"
          />
          <b>₹500 to ₹1000</b>
        </label>
      </div>
      <div>
        <label htmlFor="1000to1500">
          <input
            onChange={handleChange}
            value="1000-to-1500"
            checked={price.includes("1000-to-1500")}
            id="1000to1500"
            type="checkbox"
            name="price_filter"
          />
          <b>₹1000 to ₹1500</b>
        </label>
      </div>
      <div>
        <label htmlFor="1500to2000">
          <input
            onChange={handleChange}
            value="1500-to-2000"
            checked={price.includes("1500-to-2000")}
            id="1500to2000"
            type="checkbox"
            name="price_filter"
          />
          <b>₹1500 to ₹2000</b>
        </label>
      </div>
    </div>
  );
};

export default PriceFilter;
