import React from "react";
import "../../stylesheets/HomePage/festiveMust.css";
import {Link} from "react-router-dom"

const FestiveMust = ({ activePage, home_page_data }) => {
  return (
    <>
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
      <br />
      <br />
      <div className="festive_must">
        <h1>Must-Haves</h1>
        <div>
          {home_page_data[activePage].festive_must.map((ele, indx) => (
            <div key={indx}>
              <Link to={ele.link}><img loading="lazy" src={ele.img_url} alt="" /></Link>
              <h3>{ele.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <hr style={{ maxWidth: "1240px", margin: "auto", width: "92vw" }} />
    </>
  );
};

export default FestiveMust;
