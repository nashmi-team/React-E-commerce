import React from "react";
import Carousel from "react-elastic-carousel";
import data from ".././Shop/Data";
import "./ProductSlider.css";
import { useCart } from "react-use-cart";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  {
    width: 768,
    itemsToShow: 3,
  },
  { width: 1200, itemsToShow: 4 },
];
const ProductSlider = () => {
  const { addItem } = useCart();

  return (
    <div className="py-5">
      <div className="title-section text-center mb-5">
        <h2 className="title">Featured Products</h2>
      </div>
      <Carousel breakPoints={breakPoints} isRTL className="container">
        {data.map((data, index) => {
          return (
            <div key={index} className="product-card">
              <div className="badge">Hot</div>
              <div className="product-tumb">
                <img src={data.img} alt={data.alt} />
              </div>
              <div className="product-details">
                <h4>
                  <a href="">{data.name}</a>
                </h4>
                <div className="product-bottom-details">
                  <div className="product-price">
                    <small>$96.00</small>
                    {data.price}JD
                  </div>
                  <div className="product-links">
                    <i
                      className="fas fa-cart-plus fa-2x"
                      onClick={() => addItem(data)}
                    />
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
