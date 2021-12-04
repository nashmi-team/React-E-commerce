import React from "react";
import { useCart } from "react-use-cart";
import { withRouter } from "react-router";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { addItem } = useCart();

  console.log(props);
  return (
    <div className="product-container">
      <img src={props.match.params.src} alt={props.match.params.alt} />
      <h1>Hello {props.match.params.id}</h1>
      <h2> Price {props.match.params.price}</h2>
    </div>
  );
};
export default withRouter(SingleProduct);
