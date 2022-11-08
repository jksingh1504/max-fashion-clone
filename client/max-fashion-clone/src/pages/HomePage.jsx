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
import MobileNav from "../components/Navbar/MobileNav/MobileNav";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { home_page_data } from "../components/Utilities/HomePageData";

const HomePage = () => {
  /* code for making active slider */

  const [count, setCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(
    searchParams.getAll("page")[0] || "women"
  );

  useEffect(() => {
    setActivePage(searchParams.getAll("page")[0] || "women");
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      <Slider
        props={{
          count,
          setCount,
          next_slide,
          prev_slide,
          activePage,
          home_page_data,
        }}
      />
      <ShopByCategory activePage={activePage} home_page_data={home_page_data} />
      <StyleSpotlight activePage={activePage} home_page_data={home_page_data} />
      <WhatsYourStyle activePage={activePage} home_page_data={home_page_data} />
      <FestiveMust activePage={activePage} home_page_data={home_page_data} />
      <BudgetZone activePage={activePage} home_page_data={home_page_data} />
      <YouthStore activePage={activePage} home_page_data={home_page_data} />
      <TopStores activePage={activePage} home_page_data={home_page_data} />
      <HotTrends activePage={activePage} home_page_data={home_page_data} />
    </>
  );
};

export default HomePage;
