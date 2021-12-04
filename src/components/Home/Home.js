import React from "react";
import ProductSlider from "../ProductSlider/ProductSlider";
import { Reviews } from "../Reviews/Reviews";
import YouTube from "../Youtube/Youtube";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <ProductSlider />
      <YouTube />
      <Reviews />
    </>
  );
};

export default Home;
