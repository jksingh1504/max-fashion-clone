import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../../stylesheets/navbar/cartModal.css";
import usePrivateRoute from "../../Utilities/usePrivateRoute";
import SignupModal from "../SignupModal/SignupModal";

const CartModal = ({ setCartHeight, height = "0px" }) => {
  const { cart, total } = useSelector((store) => store.AppReducer);
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { private_route } = usePrivateRoute();

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
          <span> {cart.length} Items</span>
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

          {cart.length ? (
            cart.map((ele, indx) => {
              return (
                <React.Fragment key={indx}>
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
                        You save ₹ {Math.ceil(ele.price * 1.1) - ele.price}
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
                    <Link to={`/product?${ele.product_id}`}>
                      <img
                        onClick={() => setCartHeight("0px")}
                        style={{ borderRadius: "3px", aspectRatio: 1 }}
                        src={ele["img_url"]}
                        loading="lazy"
                        alt=""
                      />
                    </Link>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "red",
                          lineHeight: "18px",
                          fontWeight: "600",
                        }}
                      >
                        ₹ {ele.price}
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "line-through",
                            color: "rgb(188,188,188)",
                            display: "inline-block",
                            marginBottom: "-2px",
                            marginLeft: "10px",
                          }}
                        >
                          ₹
                        </span>{" "}
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "line-through",
                            color: "rgb(188,188,188)",
                            display: "inline-block",
                            marginBottom: "-2px",
                          }}
                        >
                          {Math.ceil(ele.price * 1.1)}
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "18px",
                          marginTop: "4px",
                        }}
                      >
                        {ele["name"]}
                      </p>

                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "18px",
                          marginTop: "4px",
                          color: "blue",
                          fontWeight: "600",
                        }}
                      >
                        Qty: {ele.quantity}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <>
              <br />
              <br />
              <br />
              <br />
              <h3>No Items added to your cart yet</h3>
              <br />
            </>
          )}

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
            Subtotal: ₹ {total}
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
          <SignupModal props={{ isOpen, onOpen, onClose }} />
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
              onClick={() => {
                private_route(onOpen, "/cart");
                setCartHeight("0px");
              }}
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
              onClick={() => {
                if (total > 0) {
                  private_route(onOpen, "/payment");
                  setCartHeight("0px");
                } else {
                  toast({
                    position: "bottom",
                    title: "Add products to your cart to proceed",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
                  setCartHeight("0px");
                }
              }}
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
