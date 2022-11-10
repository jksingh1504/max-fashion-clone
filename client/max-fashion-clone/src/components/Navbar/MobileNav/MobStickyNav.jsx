import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../../../stylesheets/navbar/mobileNav.css";

const MobStickyNav = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const activePage = useRef(searchParams.getAll("page")[0] || "women");
  const navigate = useNavigate();

  useEffect(() => {
    activePage.current = searchParams.getAll("page")[0];
  }, [searchParams]);

  return (
    <>
      <div id="mob_sticky_nav">
        <div
          style={activePage.current === "women" ? { color: "#303ab2",border:"1px solid #303ab2" } : {}}
          onClick={() => {
            if (window.location.href.indexOf("page=women") === -1)
              navigate("/?page=women");
          }}
        >
          Women
        </div>
        <div
          style={activePage.current === "men" ? { color: "#303ab2",border:"1px solid #303ab2" } : {}}
          onClick={() => {
            if (window.location.href.indexOf("page=men") === -1)
              navigate("/?page=men");
          }}
        >
          Men
        </div>
        <div
          style={activePage.current === "girls" ? { color: "#303ab2",border:"1px solid #303ab2" } : {}}
          onClick={() => {
            if (window.location.href.indexOf("page=girls") === -1)
              navigate("/?page=girls");
          }}
        >
          Girls
        </div>
        <div
        style={activePage.current === "boys" ? { color: "#303ab2",border:"1px solid #303ab2" } : {}}
          onClick={() => {
            if (window.location.href.indexOf("page=boys") === -1)
              navigate("/?page=boys");
          }}
        >
          Boys
        </div>
      </div>
      <div className="offer_nav">
        <p>made with ❤️ by Jyoti Kamal Singh, 2022 All Rights Reseved</p>
      </div>
    </>
  );
};

export default MobStickyNav;
