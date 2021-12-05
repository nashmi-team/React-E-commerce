import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { withRouter } from "react-router";
import data from "../Data";

import "./SingleProduct.css";

const SingleProduct = (props) => {
  const productId = props.match.params.id;
  const { addItem } = useCart();
  return (
    <div className="product-container">
      {data.map((data) => {
        if (data.id === productId) {
          return (
            <>
              <img src={`.${data.img}`} />
              <div className="product-details">
                <h1>{data.name}</h1>
                <h6> {data.price} JD</h6>
                <p>{data.info}</p>
                <button
                  className="add-to-cart"
                  onClick={() => addItem(props.item)}
                >
                  Add To Cart
                </button>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};
export default withRouter(SingleProduct);
