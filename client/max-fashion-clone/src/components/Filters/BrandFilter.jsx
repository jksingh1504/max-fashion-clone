import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../stylesheets/searchFilters/searchFilters.css";

const BrandFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const size = searchParams.getAll("size");
  const brand = searchParams.getAll("brand");
  const price = searchParams.getAll("price");
  const sort = searchParams.getAll("sort");
  // console.log("hllo",brand)

  const handleChange = (e) => {

    const newBrand = [...brand];
    if (newBrand.includes(e.target.value)) {
      newBrand.splice(newBrand.indexOf(e.target.value), 1);
      console.log(newBrand);
    } else {
      newBrand.push(e.target.value);
      // console.log(newBrand);
    }
    setSearchParams({ size, price, brand: newBrand,sort });
  };

  // useEffect(()=>{
  //   setBrand(searchParams.getAll("brand"))
  // },[searchParams])

  return (
    <div className="search_filter">
      <div>
        <label htmlFor="zara">
          <input
            checked={brand.includes("zara")}
            value="zara"
            onChange={handleChange}
            id="zara"
            type="checkbox"
            name="brand_filter"
          />
          <b>Zara</b>
        </label>
      </div>
      <div>
        <label htmlFor="biba">
          <input
            checked={brand.includes("biba")}
            onChange={handleChange}
            value="biba"
            id="biba"
            type="checkbox"
            name="brand_filter"
          />
          <b>Biba</b>
        </label>
      </div>
      <div>
        <label htmlFor="levis">
          <input
            checked={brand.includes("levis")}
            onChange={handleChange}
            value="levis"
            id="levis"
            type="checkbox"
            name="brand_filter"
          />
          <b>Levis</b>
        </label>
      </div>
    </div>
  );
};

export default BrandFilter;
