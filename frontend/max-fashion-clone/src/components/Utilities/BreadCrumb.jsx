import React from "react";
import "../../stylesheets/Utilities/breadCrumbs.css"

const BreadCrumb = () => {
  return (
    <>
      <br />
      <div className="bread_crumbs">
        <span>Home</span>
        <span className="material-icons">arrow_right</span>
        <span>Women</span>
        <span className="material-icons">arrow_right</span>
        <span>Suits & Sets</span>
      </div>
    </>
  );
};

export default BreadCrumb;
