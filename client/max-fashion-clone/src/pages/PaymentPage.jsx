import React, { useEffect } from "react";
import MobileNav from "../components/Navbar/MobileNav/MobileNav";
import Navbar from "../components/Navbar/Navbar";
import PaymentBody from "../components/Payment/PaymentBody";

const PaymentPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <MobileNav />
      <PaymentBody />
    </>
  );
};

export default PaymentPage;
