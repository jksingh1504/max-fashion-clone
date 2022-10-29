import React from "react";
import { useState } from "react";
import BudgetZone from "../components/HomePageComponents/BudgetZone";
import FestiveMust from "../components/HomePageComponents/FestiveMust";
import HotTrends from "../components/HomePageComponents/HotTrends";
import Navbar from "../components/Navbar/Navbar";
import ShopByCategory from "../components/HomePageComponents/ShopByCategory";
import Slider from "../components/HomePageComponents/Slider";
import StyleSpotlight from "../components/HomePageComponents/StyleSpotlight";
import WhatsYourStyle from "../components/HomePageComponents/WhatsYourStyle";
import TopStores from "../components/HomePageComponents/TopStores";
import YouthStore from "../components/HomePageComponents/YouthStore";
import MobileNav from "../components/Navbar/MobileNav";

const HomePage = () => {
  /* code for making active slider */
  const [count, setCount] = useState(0);

  const next_slide = () => {
    if (count < 3) setCount(count + 1);
    else setCount(0);
  };

  const prev_slide = () => {
    if (count > 0) setCount(count - 1);
    else setCount(3);
  };

  

  return (
    <>
      <Navbar />
      <MobileNav />
      <Slider props={{ count, setCount, next_slide, prev_slide }} />
      <ShopByCategory />
      <StyleSpotlight />
      <WhatsYourStyle />
      <FestiveMust />
      <BudgetZone />
      <YouthStore />
      <TopStores />
      <HotTrends />
    </>
  );
};

export default HomePage;
