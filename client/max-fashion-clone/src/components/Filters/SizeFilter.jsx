import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../stylesheets/searchFilters/searchFilters.css";

const SizeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const size = searchParams.getAll("size");
  const brand = searchParams.getAll("brand");
  const price = searchParams.getAll("price");
  const sort = searchParams.getAll("sort");

  const handleChange = (e) => {
    const newSize = [...size];
    if (newSize.includes(e.target.value)) {
      newSize.splice(newSize.indexOf(e.target.value), 1);
      // console.log(newSize);
    } else {
      newSize.push(e.target.value);
      // console.log(newSize);
    }
    setSearchParams({ brand, price, size: newSize,sort });
  };

  return (
    <div className="search_filter">
      <div>
        <label htmlFor="XS">
          <input
            value="XS"
            onChange={handleChange}
            id="XS"
            type="checkbox"
            checked={size.includes("XS")}
          />
          <b>XS</b>
        </label>
      </div>
      <div>
        <label htmlFor="S">
          <input
            value="S"
            onChange={handleChange}
            id="S"
            type="checkbox"
            checked={size.includes("S")}
          />
          <b>S</b>
        </label>
      </div>
      <div>
        <label htmlFor="M">
          <input
            value="M"
            onChange={handleChange}
            id="M"
            type="checkbox"
            checked={size.includes("M")}
          />
          <b>M</b>
        </label>
      </div>
      <div>
        <label htmlFor="L">
          <input
            value="L"
            onChange={handleChange}
            id="L"
            type="checkbox"
            checked={size.includes("L")}
          />
          <b>L</b>
        </label>
      </div>
      <div>
        <label htmlFor="XL">
          <input
            value="XL"
            onChange={handleChange}
            id="XL"
            type="checkbox"
            checked={size.includes("XL")}
          />
          <b>XL</b>
        </label>
      </div>
      <div>
        <label htmlFor="XXL">
          <input
            value="XXL"
            onChange={handleChange}
            id="XXL"
            type="checkbox"
            checked={size.includes("XXL")}
          />
          <b>XXL</b>
        </label>
      </div>
    </div>
  );
};

export default SizeFilter;
