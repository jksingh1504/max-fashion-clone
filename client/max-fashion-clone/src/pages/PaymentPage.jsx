import React from "react";
import MobileNav from "../components/Navbar/MobileNav/MobileNav";
import Navbar from "../components/Navbar/Navbar";
import PaymentBody from "../components/Payment/PaymentBody";

const PaymentPage = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      <PaymentBody />
    </>
  );
};

export default PaymentPage;
