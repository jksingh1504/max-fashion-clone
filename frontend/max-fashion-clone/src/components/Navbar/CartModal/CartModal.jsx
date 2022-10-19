import React from "react";
import "../../../stylesheets/navbar/cartModal.css";

const CartModal = ({ height = "0px" }) => {
  return (
    <>
      <div
        style={{
          height: height,
        }}
        className="cart_modal"
      >
        <div style={{ padding: "10px" }}>
          <b>Cart:</b>
          <span> 2 Items</span>
          <div
            style={{
              textAlign: "left",
              padding: "10px",
              borderRadius: "3px",
              marginTop: "10px",
              border: "1px solid rgb(200,200,200)",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "red",
                lineHeight: "18px",
                fontWeight: "600",
              }}
            >
              MISSED OFFER:{" "}
              <span style={{ color: "black", fontSize: "12px" }}>
                Shop for Rs. 2499 & Get Additional 200 off. Use Code FEST200
              </span>
            </p>
          </div>

          <div
            style={{
              textAlign: "left",
              padding: "10px",
              borderRadius: "3px",
              marginTop: "10px",
              border: "1px solid rgb(200,200,200)",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "green",
                lineHeight: "18px",
                fontWeight: "600",
              }}
            >
              OFFER CLAIMED:{" "}
              <span style={{ color: "black", fontSize: "12px" }}>
                You save{" "}
                <span style={{ fontSize: "12px" }} className="material-icons">
                  currency_rupee
                </span>{" "}
                105
              </span>
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px auto",
              textAlign: "left",
              gap: "16px",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid rgb(200,200,200)",
              borderTop: "none",
            }}
          >
            <img
              style={{ borderRadius: "3px" }}
              src="https://lmsin.net/cdn-cgi/image/h=150,w=150,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011366031-Blue-NAVY-1000011366031-09072022_01-2100.jpg"
              alt=""
            />
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "red",
                  lineHeight: "18px",
                  fontWeight: "600",
                }}
              >
                {" "}
                <span
                  style={{
                    fontSize: "14px",
                    display: "inline-block",
                    marginBottom: "-2px",
                  }}
                  className="material-icons"
                >
                  currency_rupee
                </span>{" "}
                244{" "}
                <span
                  style={{
                    fontSize: "14px",
                    textDecoration: "line-through",
                    color: "rgb(188,188,188)",
                    display: "inline-block",
                    marginBottom: "-2px",
                    marginLeft: "10px",
                  }}
                  className="material-icons"
                >
                  currency_rupee
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    textDecoration: "line-through",
                    color: "rgb(188,188,188)",
                    display: "inline-block",
                    marginBottom: "-2px",
                  }}
                >
                  349
                </span>
              </p>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginTop: "4px",
                }}
              >
                Max Men Graphic Print Boxers
              </p>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginTop: "4px",
                }}
              >
                Qty: 1
              </p>
            </div>
          </div>

          <div
            style={{
              textAlign: "left",
              padding: "10px",
              borderRadius: "3px",
              marginTop: "10px",
              border: "1px solid rgb(200,200,200)",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "green",
                lineHeight: "18px",
                fontWeight: "600",
              }}
            >
              OFFER CLAIMED:{" "}
              <span style={{ color: "black", fontSize: "12px" }}>
                You save{" "}
                <span style={{ fontSize: "12px" }} className="material-icons">
                  currency_rupee
                </span>{" "}
                105
              </span>
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px auto",
              textAlign: "left",
              gap: "16px",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid rgb(200,200,200)",
              borderTop: "none",
            }}
          >
            <img
              style={{ borderRadius: "3px" }}
              src="https://lmsin.net/cdn-cgi/image/h=150,w=150,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011366031-Blue-NAVY-1000011366031-09072022_01-2100.jpg"
              alt=""
            />
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "red",
                  lineHeight: "18px",
                  fontWeight: "600",
                }}
              >
                {" "}
                <span
                  style={{
                    fontSize: "14px",
                    display: "inline-block",
                    marginBottom: "-2px",
                  }}
                  className="material-icons"
                >
                  currency_rupee
                </span>{" "}
                244{" "}
                <span
                  style={{
                    fontSize: "14px",
                    textDecoration: "line-through",
                    color: "rgb(188,188,188)",
                    display: "inline-block",
                    marginBottom: "-2px",
                    marginLeft: "10px",
                  }}
                  className="material-icons"
                >
                  currency_rupee
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    textDecoration: "line-through",
                    color: "rgb(188,188,188)",
                    display: "inline-block",
                    marginBottom: "-2px",
                  }}
                >
                  349
                </span>
              </p>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginTop: "4px",
                }}
              >
                Max Men Graphic Print Boxers
              </p>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginTop: "4px",
                }}
              >
                Qty: 1
              </p>
            </div>
          </div>

          <div
            style={{
              textAlign: "left",
              padding: "10px",
              borderRadius: "3px",
              marginTop: "10px",
              border: "1px solid rgb(200,200,200)",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "green",
                lineHeight: "18px",
                fontWeight: "600",
              }}
            >
              OFFER CLAIMED:{" "}
              <span style={{ color: "black", fontSize: "12px" }}>
                You save{" "}
                <span style={{ fontSize: "12px" }} className="material-icons">
                  currency_rupee
                </span>{" "}
                105
              </span>
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px auto",
              textAlign: "left",
              gap: "16px",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid rgb(200,200,200)",
              borderTop: "none",
            }}
          >
            <img
              style={{ borderRadius: "3px" }}
              src="https://lmsin.net/cdn-cgi/image/h=150,w=150,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011366031-Blue-NAVY-1000011366031-09072022_01-2100.jpg"
              alt=""
            />
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "red",
                  lineHeight: "18px",
                  fontWeight: "600",
                }}
              >
                {" "}
                <span
                  style={{
                    fontSize: "14px",
                    display: "inline-block",
                    marginBottom: "-2px",
                  }}
                  className="material-icons"
                >
                  currency_rupee
                </span>{" "}
                244{" "}
                <span
                  style={{
                    fontSize: "14px",
                    textDecoration: "line-through",
                    color: "rgb(188,188,188)",
                    display: "inline-block",
                    marginBottom: "-2px",
                    marginLeft: "10px",
                  }}
                  className="material-icons"
                >
                  currency_rupee
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    textDecoration: "line-through",
                    color: "rgb(188,188,188)",
                    display: "inline-block",
                    marginBottom: "-2px",
                  }}
                >
                  349
                </span>
              </p>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginTop: "4px",
                }}
              >
                Max Men Graphic Print Boxers
              </p>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginTop: "4px",
                }}
              >
                Qty: 1
              </p>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>

        <div>
          <p
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              fontWeight: "700",
              color: "rgb(90, 90, 90)",
            }}
          >
            Subtotal:{" "}
            <span
              style={{ fontSize: "16px", fontWeight: "900" }}
              className="material-icons"
            >
              currency_rupee
            </span>
            552
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "rgb(90, 90, 90)",
            }}
          >
            (Shipping charges may apply)
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "46px",
              gridTemplateColumns: "repeat(2,1fr)",
              width: "100%",
              justifyContent: "center",
              gap: "10px",
              marginTop: "16px",
            }}
          >
            <button
              style={{
                border: "1px solid rgb(188, 188, 188)",
                borderRadius: "3px",
                color: "#303ab2",
                fontWeight: "600",
              }}
            >
              VIEW BASKET
            </button>
            <button
              style={{
                border: "1px solid rgb(188, 188, 188)",
                backgroundColor: "#303ab2",
                borderRadius: "3px",
                color: "white",
                fontWeight: "600",
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
