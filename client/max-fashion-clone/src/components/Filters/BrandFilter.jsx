import React from "react";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import "../../stylesheets/searchFilters/searchFilters.css";
import { brand_filter } from "../Utilities/brandFilters";

const BrandFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const size = searchParams.getAll("size");
  const brand = searchParams.getAll("brand");
  const price = searchParams.getAll("price");
  const sort = searchParams.getAll("sort");
  const handle_current_category = () => {
    if (window.location.href.includes("women")) return "women";
    else if (window.location.href.includes("girls")) return "girls";
    else if (window.location.href.includes("boys")) return "boys";
    else return "men";
  };
  const current_category = useRef(handle_current_category());


  const handleChange = (e) => {
    const newBrand = [...brand];
    if (newBrand.includes(e.target.value)) {
      newBrand.splice(newBrand.indexOf(e.target.value), 1);
    } else {
      newBrand.push(e.target.value);
      // console.log(newBrand);
    }
    setSearchParams({ size, price, brand: newBrand, sort });
  };


  return (
    <div className="search_filter">
      {brand_filter[current_category.current] &&
        brand_filter[current_category.current].map((ele, indx) => {
          return (
            <div key={indx}>
              <label htmlFor={ele}>
                <input
                  checked={brand.includes(ele)}
                  value={ele}
                  onChange={handleChange}
                  id={ele}
                  type="checkbox"
                  name="brand_filter"
                />
                <b>{ele}</b>
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default BrandFilter;
