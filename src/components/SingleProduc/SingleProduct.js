// import React from "react";
// import { useCart } from "react-use-cart";
import { withRouter } from "react-router-dom";

const SingleProduct = (props) => {
  // const { addItem } = useCart();
  return (
    <div>
      <h1> {props.match.params.id}</h1>
      <img src={props.match.params.src} />
    </div>
  );
};
export default withRouter(SingleProduct);
