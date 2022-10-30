import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/AppRedux/action"

const SizeSelector = ({ size,currentModal }) => {

  const product_size=useSelector(store=>store.AppReducer.product_size)
  const dispatch=useDispatch()
  

  const handleChange = (e) => {
    // console.log(e.target.value)
    // return
    dispatch(action.set_product_size(e.target.value))
    currentModal.current("0px")
  };
  return (
    <div className="search_filter">
      {size.map((ele, indx) => {
        return (
          <div key={indx}>
            <label>
              <input
                checked={product_size===ele}
                value={ele}
                onChange={handleChange}
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
