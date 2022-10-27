import React from "react";
import BreadCrumb from "../Utilities/BreadCrumb";
import "../../stylesheets/ProductPage/productPage.css";
import "../../stylesheets/Utilities/flex.css";

const ProductDetails = () => {
  const size = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <>
      <BreadCrumb />
      <p style={{ margin: "6px 0px 10px" }}>
        MAX Women Printed Elasticated Capris - Pack of 2
      </p>

      <div className="product_details">
        <div className="product_img">
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_01-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <flex>
              <span
                style={{ fontSize: "14px", color: "red" }}
                className="material-icons"
              >
                currency_rupee
              </span>
              <h2>629</h2>
              <span
                style={{
                  fontSize: "14px",
                  height: "38px",
                  color: "grey",
                  display: "inline-flex",
                  marginLeft: "10px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                inclusve of all taxes
              </span>
            </flex>
            <flex>
              <s style={{ color: "grey" }}>₹ 899 </s>
              <span style={{ marginLeft: "10px" }}>Save ₹ 270 (30.03%)</span>
            </flex>
            <span
              style={{
                display: "inline-block",
                fontSize: "14px",
                color: "#303ab2",
                marginTop: "8px",
                textDecoration: "underline",
              }}
            >
              Free shipping on orders above INR 998
            </span>

            <div
              style={{
                width: "50px",
                marginTop: "30px",
                padding: "6px",
                border: "2px solid #303ab2",
                borderRadius: "3px",
              }}
            >
              <img
                src="https://lmsin.net/cdn-cgi/image/h=235,w=235,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_01-2100.jpg"
                alt=""
              />
            </div>

            <span
              style={{
                fontSize: "14px",
                color: "grey",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              Color:{" "}
              <span style={{ color: "black", fontWeight: "600" }}>
                Multicolor
              </span>
            </span>

            <div style={{ marginTop: "26px" }}>
              <span style={{ fontSize: "14px" }}>Size:</span>
              <flex style={{ gap: "12px" }}>
                {size.map((ele, indx) => {
                  return (
                    <div className="size_nav" key={indx}>
                      {ele}
                    </div>
                  );
                })}
              </flex>
            </div>
            <br />
            <button className="add_to_basket_button">ADD TO BASKET</button>
            <br />
            <br />
            <flex style={{ fontWeight: "600", fontSize: "14px" }}>
              <span class="material-icons">favorite_border</span> Add to
              Favorites
            </flex>
            <br />
            <hr />
            <br />
            <flex
              style={{
                width: "fit-content",
                padding: "4px 10px",
                justifyContent: "center",
                fontWeight: "600",
                fontSize: "12px",
                color: "red",
                borderRadius: "3px",
                backgroundColor: "rgb(247, 231, 231)",
              }}
            >
              PROMOTION OFFER
            </flex>
            <span
              style={{
                display: "inline-flex",
                fontSize: "14px",
                marginTop: "10px",
                lineHeight: "20px",
              }}
            >
              Festive Special- Rs.200 Off on 2499 & above, code- FEST200 | Get
              Rs.100 off on orders above 999 (first purchase only), code- NEW100
              Browse promotion
            </span>
            <br />
            <br />
            <hr />
            <br />
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                marginBottom: "20px",
                gap: "16px",
              }}
            >
              <span className="material-icons">add_business</span>
              <div>
                <b>Click & Collect</b>
                <p>
                  Order this product now and collect it from a store of your
                  choice. Learn more
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                marginBottom: "20px",
                gap: "16px",
              }}
            >
              <span className="material-icons">calendar_month</span>
              <div>
                <b>Pay in installments</b>
                <p>
                  Pay in easy installments on orders of ₹ 3,000 or more.
                  Available for select banks. Learn more
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                marginBottom: "20px",
                gap: "16px",
              }}
            >
              <span
                style={{ transform: "rotate(180deg)" }}
                className="material-icons"
              >
                forward
              </span>
              <div>
                <b>30 days easy return policy. Learn more</b>
                <p></p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "14px",
                gap: "16px",
              }}
            >
              <span className="material-icons">local_shipping</span>
              <div style={{ width: "100%" }}>
                <b>When will I receive my order?</b>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    margin: "10px 0px 0px",
                  }}
                >
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid rgb(200,200,200)",
                      borderRadius: "3px",
                      paddingLeft: "20px",
                    }}
                    placeholder="Enter your area Pincode"
                    type="number"
                  />
                  <button
                    style={{ width: "80px" }}
                    className="add_to_basket_button"
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Overview
            </p>
            <span
              style={{
                display: "inline-flex",
                fontSize: "14px",
                marginTop: "10px",
                lineHeight: "20px",
              }}
            >
              Adorned with bold prints all over, this gown is complemented with
              short sleeves and a round neckline. Tailored from a soft fabric,
              this gown shall ensure superior comfort.
            </span>
            <ul
              style={{
                fontSize: "14px",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>Type : Night gowns</li>
              <li>Design : Printed</li>
              <li>Length : Ankle Length</li>
              <li>Sleeve Length : Half Sleeves</li>
              <li>Fabric : Cotton</li>
              <li>Care Instructions : Machine Wash</li>
              <li>
                Model Wears : Size S,has Height 5'7",Chest 33",and Waist 28"
              </li>
              <li>
                Return Policy : This product is returnable within 30 days of
                delivery
              </li>
              <li>Product : Nightgown</li>
              <li>Country of Origin : India</li>
              <li>
                Manufactured By : Lifestyle Int Pvt Ltd, 77 Degree Town Centre,
                Building No. 3, West Wing, Off HAL Airport Road, Yamlur,
                Bangalore-560037
              </li>
              <li>
                For Consumer Complaints Contact : Manager Commercial,77 Degree
                Town Centre, Building No. 3, West Wing, Off HAL Airport Road,
                Yamlur PO., Bangalore-560037, Phone: 1800-123-1444,
                help.in@maxfashion.com
              </li>
              <li>Net Quantity : 1</li>
            </ul>
            <br />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
