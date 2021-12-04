import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import data from "../Shop/Data";
import "./ProductSlider.css";
import { useCart } from "react-use-cart";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ProductSlider = () => {
  const { addItem } = useCart();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <span>Featured Products</span>
      </h1>
      <Carousel breakPoints={breakPoints} isRTL className="container">
        {data.map((data, index) => {
          return (
            <Item key={index}>
              <div className="slider">
                <img src={data.img} alt={data.alt} />
                <h3>{data.name}</h3>
                <h5>{data.price}JD</h5>
                <button
                  className="add_to_cart sliderbtn"
                  onClick={() => addItem(data)}
                >
                  Add To Cart
                </button>
              </div>
            </Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ProductSlider;
