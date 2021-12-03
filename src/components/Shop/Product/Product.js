import React from "react";
import "./Product.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { addItem } = useCart();

  return (
    <div className="productCard">
      <img src={props.src} alt={props.alt} />
      <h3>{props.productName}</h3>
      <p>{props.productInfo}</p>
      <p className="price">{props.price} JD</p>
      <button className="add_to_cart" onClick={() => addItem(props.item)}>
        Add To Cart
      </button>
    </div>
  );
};
export default Product;
