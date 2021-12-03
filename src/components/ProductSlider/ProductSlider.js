import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import Data from '../Shop/shop.data'
// import "./styles.css";
import logo from "../../assets/Logo.png";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ProductSlider = ()  =>{
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <span>Featured Products</span>
      </h1>
      <Carousel breakPoints={breakPoints}>
        <Item>
          <img src={logo} alt="" />
        </Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
        <Item>Six</Item>
        <Item>Seven</Item>
        <Item>Eight</Item>
      </Carousel>
    </>
  );
}


export default ProductSlider;
