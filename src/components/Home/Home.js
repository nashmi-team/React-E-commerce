import React from "react";
import { Reviews } from "../Reviews/Reviews";
import YouTube from "../Youtube/Youtube";
import Header from "../Header/Header";
import Features from "../Features/Features";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Slider />
      <YouTube />
      <Reviews />
    </>
  );
};

export default Home;
