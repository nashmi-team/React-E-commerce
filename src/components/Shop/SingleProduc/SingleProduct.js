import { useCart } from "react-use-cart";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../Data";

import "./SingleProduct.css";
import React from "react";

const SingleProduct = (props) => {
  const productName = props.match.params.productName;
  const { addItem } = useCart();
  return (
    <div className="product">
      <p>
        <Link to="/">Home</Link>/ <Link to="/shop">Shop</Link>/{productName}
      </p>

      <div className="product-container">
        {data.map((data, id) => {
          if (data.name === productName) {
            return (
              <React.Fragment key={id}>
                <img src={data.img} alt={data.alt} />
                <div className="product-details">
                  <h1>{data.name}</h1>
                  <h6> {data.price} JD</h6>
                  <p>{data.info}</p>
                  <button className="add-to-cart" onClick={() => addItem(data)}>
                    Add To Cart
                  </button>
                </div>
              </React.Fragment>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export default withRouter(SingleProduct);
