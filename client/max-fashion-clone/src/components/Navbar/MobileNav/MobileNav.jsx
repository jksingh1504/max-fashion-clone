import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../stylesheets/navbar/mobileNav.css";
import MobStickyNav from "./MobStickyNav";
import * as action from "../../../redux/AppRedux/action";
import { useDisclosure } from "@chakra-ui/react";
import SignupModal from "../SignupModal/SignupModal";
import MobileMenu from "./MobileMenu";
import usePrivateRoute from "../../Utilities/usePrivateRoute";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const { cart, user } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { private_route } = usePrivateRoute();

  useEffect(() => {
    fetch(
      `https://arcane-oasis-69173.herokuapp.com/max-fashion/cart/${user._id}`
    )
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
            <MobileMenu />
            <h1
              style={{
                margin: "-6px 0px 0px",
                fontSize: "38px",
                padding: "0px",
                color: "#303ab2",
                fontWeight: "700",
              }}
            >
              <Link to="/">
                ma<span style={{ color: "#e4002b" }}>x</span>
              </Link>
            </h1>
          </div>
          <div>
            <span onClick={() => private_route(onOpen, "/wishlist")} className="material-icons">favorite_border</span>
            <div
              onClick={() => private_route(onOpen, "/cart")}
              style={{ position: "relative" }}
            >
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
            <SignupModal props={{ isOpen, onOpen, onClose }} />
          </div>
        </div>
      </div>
      <div>
        <input type="text" placeholder="What are you looking for?" />
      </div>
      <MobStickyNav />
    </>
  );
};

export default MobileNav;
