import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item.css";
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
    <div className="py-5">
      <h1 style={{ textAlign: "center", marginBottom: 15 }}>
        <span>Featured Products</span>
      </h1>
      <Carousel breakPoints={breakPoints} isRTL className="container">
        {data.map((data,index) => {
          return (
              <div key={index}  className="product-card">
                  <div className="badge">Hot</div>
                  <div className="product-tumb">
                      <img src={data.img} alt={data.alt} />
                  </div>
                  <div className="product-details">
                      <h4><a href="">{data.name}</a></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                      <div className="product-bottom-details">
                          <div className="product-price"><small>$96.00</small>{data.price}JD</div>
                          <div className="product-links">
                              <a href=""><i className="fa fa-heart"/></a>
                              <a href=""><i className="fa fa-shopping-cart"/></a>
                          </div>
                      </div>
                  </div>
              </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
