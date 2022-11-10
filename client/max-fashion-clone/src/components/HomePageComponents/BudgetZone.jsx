import React from "react";
import "../../stylesheets/HomePage/budgetZone.css";

const BudgetZone = ({ activePage, home_page_data }) => {
  return (
    <>
      <br />
      <br />
      <div className="budget_zone">
        <h1>Budget Zone</h1>
        <div>
          <div>
            <img
              loading="lazy"
              src={home_page_data[activePage].budget_zone.img_1}
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={home_page_data[activePage].budget_zone.img_2}
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={home_page_data[activePage].budget_zone.img_3}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
    </>
  );
};

export default BudgetZone;
