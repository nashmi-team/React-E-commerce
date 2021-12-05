import React from "react";
import ProductSlider from "../ProductSlider/ProductSlider";
import { Reviews } from "../Reviews/Reviews";
import YouTube from "../Youtube/Youtube";
import Header from "../Header/Header";
import Features from "../Features/Features";

const Home = () => {
  return (
    <>
      <Header />
        <Features />
      <ProductSlider />
      <YouTube />
      <Reviews />
    </>
  );
};

export default Home;
