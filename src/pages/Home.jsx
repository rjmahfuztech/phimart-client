import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import Features from "../components/Features";
import Product from "../components/Products/Product";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Features />
      <Product />
    </>
  );
};

export default Home;
