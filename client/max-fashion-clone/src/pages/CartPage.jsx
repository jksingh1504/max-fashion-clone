import React, { useEffect } from "react";
import CartBody from "../components/CartPageComponents/CartBody";
import MobileNav from "../components/Navbar/MobileNav/MobileNav";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <MobileNav />
      <CartBody />
    </>
  );
};

export default CartPage;
