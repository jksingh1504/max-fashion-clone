import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../stylesheets/navbar/mobileNav.css";
import MobStickyNav from "./MobStickyNav";
import * as action from "../../redux/AppRedux/action"

const MobileNav = () => {

  const {cart,user}=useSelector(store=>store.AppReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://arcane-oasis-69173.herokuapp.com/max-fashion/cart/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(action.set_cart(data));
      });
  }, [dispatch, user]);


  return (
    <>
      <div id="mobile_nav">
        <div>
          <div>
            <span
              style={{
                fontSize: "30px",
                display: "inline-flex",
                marginTop: "3px",
              }}
              className="material-icons"
            >
              menu
            </span>
            <h1
              style={{
                margin: "-10px 0px 0px",
                fontSize: "38px",
                padding: "0px",
                color: "#303ab2",
                fontWeight: "700",
              }}
            >
              ma<span style={{ color: "#e4002b" }}>x</span>
            </h1>
          </div>
          <div>
            <span
              style={{
                display: "inline-flex",
                marginTop: "3px",
              }}
              className="material-icons"
            >
              favorite_border
            </span>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  display: "inline-flex",
                  marginTop: "5px",
                }}
                className="material-icons"
              >
                shopping_bag
              </span>
              <span className="mobile_cart_count">{cart.length}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input type="text" placeholder="What are you looking for?" />
      </div>
      <MobStickyNav/>
    </>
  );
};

export default MobileNav;
