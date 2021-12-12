import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../ProductCard/card.css";
import Swal from "sweetalert2";

const Product = (props) => {
  const { addItem } = useCart();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    const handleAddToCart = (product) => {
        addItem(product);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your item has been added to cart',
            showConfirmButton: false,
            timer: 1200
        })

    };
  return (
    <figure className="snip1268" data-aos="fade-up">
      <div className="image">
        <img src={props.src} alt={props.alt} />
        <button className="add-to-cart1" onClick={() => handleAddToCart(props.item)}>
          Add to Cart
        </button>
      </div>
      <figcaption className="card-content">
        <h2 className="title-desc">
          <Link to={`/shop/${props.productName}`}>{props.productName}</Link>
        </h2>
        <div className="price">{props.price} JD</div>
      </figcaption>
    </figure>
  );
};
export default Product;
