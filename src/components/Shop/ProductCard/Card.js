import React from "react";
import "./card.css";

function Card() {
  return (
    <div>
      <figure className="snip1268">
        <div className="image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg"
            alt="sq-sample4"
          />

          <a href="#" className="add-to-cart1">
            Add to Cart
          </a>
        </div>
        <figcaption>
          <h2 className="title">Denim Shirt</h2>
          <p>
            My family is dysfunctional and my parents won't empower me.
            Consequently I'm not self actualized.
          </p>
          <div className="price">$65.00</div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
