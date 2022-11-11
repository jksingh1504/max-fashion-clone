import React from "react";
import MobileNav from "../components/Navbar/MobileNav/MobileNav";
import Navbar from "../components/Navbar/Navbar";
import WishlistBody from "../components/Wishlist/WishlistBody";

const Wishlist = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      <WishlistBody />
    </>
  );
};

export default Wishlist;
