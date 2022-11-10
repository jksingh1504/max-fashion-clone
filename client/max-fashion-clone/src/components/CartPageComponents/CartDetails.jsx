import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../stylesheets/cartPage/cartDetails.css";
import OfferModal from "./OfferModal";

const CartDetails = () => {
  const total = useSelector((store) => store.AppReducer.total);
  const [offerDiscount, setOfferDiscount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toastIdRef = useRef(null);
  const toast = useToast();
  const navigate = useNavigate();

  const handle_checkout = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (total > 0) {
      navigate("/payment");
    } else {
      toastIdRef.current = toast({
        position: "bottom",
        title: "Add products to your cart to proceed",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="cart_details">
      <div>
        <div>
          <b>Deliver to</b>
          <h3>490123</h3>
        </div>
        <b style={{ color: "#303ab2" }}>Change</b>
      </div>
      <div>
        <div>
          <img
            loading="lazy"
            src="https://www.maxfashion.in/static/icons/gift-box.png"
            alt=""
          />
        </div>
        <div style={{ flexDirection: "column", gap: "8px" }}>
          <div style={{ width: "100%" }}>
            <b>Offers for you !</b>{" "}
            <b onClick={onOpen} style={{ color: "#303ab2", cursor: "pointer" }}>
              Select
            </b>
            <OfferModal props={{ setOfferDiscount, onClose, isOpen, total }} />
          </div>
          <p> Choose and apply voucher in 2 simple steps</p>
        </div>
      </div>
      <div>
        <div>
          <p>Total MRP</p>
          <b>₹{total}</b>
        </div>

        <div>
          <p>Item discount</p>
          <b style={{ color: "green" }}>- ₹{Math.ceil(0.1 * total)}</b>
        </div>

        <div>
          <p>Offer Discount</p>
          <b style={{ color: "green" }}>-₹ {offerDiscount}</b>
        </div>

        <div>
          <p>Shipping charge</p>
          <b>Free</b>
        </div>

        <hr />

        <div>
          <h3>Total</h3>
          <h3>₹{Math.floor(0.9 * total - offerDiscount)}</h3>
        </div>
        <button onClick={handle_checkout}>Checkout</button>
        <p
          style={{
            backgroundColor: "rgb(233, 233, 233)",
            padding: "6px",
            lineHeight: "20px",
            borderRadius: "3px",
          }}
        >
          Shipping charges might vary based on pincode delivery location
        </p>
      </div>
    </div>
  );
};

export default CartDetails;
