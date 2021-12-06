import React, { useEffect } from "react";
// import "./Product.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../ProductCard/card.css";

const Product = (props) => {
  const { addItem } = useCart();

  // return (
  //   <div className="productCard">
  //     <img src={props.src} alt={props.alt} />
  //     <h3>{props.productName}</h3>
  //     <p className="price">{props.price} JD</p>
  //     <div className="btn-view">
  //       <button className="view-product">
  //         <Link to={`/product/${props.productName}`}>View</Link>
  //       </button>
  //       <button className="add_to_cart" onClick={() => addItem(props.item)}>
  //         Add To Cart
  //       </button>
  //     </div>
  //   </div>
  // );
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <figure className="snip1268" data-aos="fade-up">
      <div className="image">
        <img src={props.src} alt={props.alt} />

        <Link
          className="add-to-cart1"
          to={`/shop/${props.productName}`}
          onClick={() => addItem(props.item)}
        >
          Add to Cart
        </Link>
      </div>
      <figcaption className="card-content">
        <h2 className="title-desc">{props.productName}</h2>
        <div className="price">{props.price} JD</div>
      </figcaption>
    </figure>
  );
};
export default Product;
