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
              <h1>{data.name}</h1>
              <h2> Price {data.price} JD</h2>
              <p>{data.info}</p>
            </>
          );
        }
      })}
    </div>
  );
};
export default withRouter(SingleProduct);
