import React from "react";

const SizeSelector = ({ size }) => {
  let x=Math.random()+Math.random()+""
  const handleChange = () => {};
  return (
    <div className="search_filter">
      {size.map((ele, indx) => {
        return (
          <div key={indx}>
            <label htmlFor={x}>
              <input
                value={ele}
                onChange={handleChange}
                id={x}
                type="checkbox"
              />
              <b>{ele}</b>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default SizeSelector;
