import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import data from "../Shop/shop.data";
import "./ProductSlider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ProductSlider = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <span>Featured Products</span>
      </h1>
      <Carousel breakPoints={breakPoints} isRTL className="container">
        {data.map((data) => {
          return (
            <Item>
              <div className="slider-img">
                <img src={data.img} alt={data.alt} />
                <h3>{data.name}</h3>
                <h5>{data.price}JD</h5>
              </div>
            </Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ProductSlider;
