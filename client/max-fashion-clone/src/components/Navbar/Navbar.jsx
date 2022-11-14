import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../../stylesheets/navbar/navbar.css";
import CartModal from "./CartModal/CartModal";
import WomenSubnav from "./Subnav/WomenSubnav";
import MenSubnav from "./Subnav/MenSubnav";
import GirlSubnav from "./Subnav/GirlSubnav";
import BoySubnav from "./Subnav/BoySubnav";
import { useDisclosure } from "@chakra-ui/react";
import SignupModal from "./SignupModal/SignupModal";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/AppRedux/action";
import { useRef } from "react";
import usePrivateRoute from "../Utilities/usePrivateRoute";

const Navbar = () => {
  const [cartHeight, setCartHeight] = useState("0px");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, user } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  const activePage = useRef(searchParams.getAll("page")[0] || "women");
  const { private_route } = usePrivateRoute();

  useEffect(() => {
    fetch(
      `https://max-fashion-clone-server.vercel.app/max-fashion/cart/${user._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(action.set_cart(data));
      });
  }, [dispatch, user]);

  useEffect(() => {
    activePage.current = searchParams.getAll("page")[0];
  }, [searchParams]);

  return (
    <>
      <div id="navbar">
        <div className="nav_child_1">
          <h1
            style={{
              margin: "-10px 0px 0px",
              fontSize: "40px",
              padding: "0px",
              color: "#303ab2",
              fontWeight: "900",
            }}
          >
            <Link to="/">
              ma<span style={{ color: "#e4002b" }}>x</span>
            </Link>
          </h1>
          <div className={activePage.current === "women" ? "men active_page" : "men"}>
            <b
              onClick={() => {
                if (window.location.href.indexOf("page=women") === -1)
                  navigate("/?page=women");
              }}
            >
              Women
            </b>
            <div>
              <WomenSubnav />
            </div>
          </div>
          <div className={activePage.current === "men" ? "women active_page" : "men"}>
            <b
              onClick={() => {
                if (window.location.href.indexOf("page=men") === -1)
                  navigate("/?page=men");
              }}
            >
              Men
            </b>
            <div>
              <MenSubnav />
            </div>
          </div>
          <div  className={activePage.current === "girls" ? "girls active_page" : "men"}>
            <b
              onClick={() => {
                if (window.location.href.indexOf("page=girls") === -1)
                  navigate("/?page=girls");
              }}
            >
              Girls
            </b>
            <div>
              <GirlSubnav />
            </div>
          </div>
          <div className={activePage.current === "boys" ? "boys active_page" : "boys"}>
            <b
              onClick={() => {
                if (window.location.href.indexOf("page=boys") === -1)
                  navigate("/?page=boys");
              }}
            >
              Boys
            </b>
            <div>
              <BoySubnav />
            </div>
          </div>
        </div>
        <div className="nav_child_2">
          <span className="material-icons">search</span>
          <input type="text" placeholder="What are you lookin for?" />
        </div>
        <div className="nav_child_3">
          <div>
            <b onClick={onOpen}>
              {user.user_name ? (
                <>
                  <b>
                    Welcome!
                    <span style={{ color: "#303ab2" }}>
                      {" " + user.user_name}
                    </span>
                  </b>
                </>
              ) : (
                "Sign-up/Login"
              )}
            </b>
            <SignupModal props={{ isOpen, onOpen, onClose }} />
          </div>
          <div onClick={() => private_route(onOpen, "/wishlist")}>
            <span
              style={{ display: "inline-block", marginTop: "6px" }}
              className="material-icons"
            >
              favorite_border
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <span
              style={{ display: "inline-block", marginTop: "4px" }}
              onClick={() => {
                if (cartHeight === "0px") setCartHeight("480px");
                else setCartHeight("0px");
              }}
              className="material-icons"
            >
              shopping_bag
            </span>
            <span
              onClick={() => {
                if (cartHeight === "0px") setCartHeight("480px");
                else setCartHeight("0px");
              }}
              className="cart_count"
            >
              {cart.length}
            </span>
            <CartModal setCartHeight={setCartHeight} height={cartHeight} />
          </div>
        </div>
      </div>
      <div className="offer_nav">
        <p>made with ❤️ by Jyoti Kamal Singh, 2022 All Rights Reseved</p>
      </div>
    </>
  );
};

export default Navbar;
