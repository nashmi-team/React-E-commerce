import { useCart } from "react-use-cart";
import { withRouter } from "react-router";
import data from "../Data";

import "./SingleProduct.css";

const SingleProduct = (props) => {
  const productId = props.match.params.id;
  const { addItem } = useCart();
  return (
    <>
      {data.map((data, id) => {
        if (data.id === productId) {
          return (
            <>
              <div className="product-details" key={id}>
                <img src={data.img} alt={data.alt} />

                <h1>{data.name}</h1>
                <h6> {data.price} JD</h6>
                <p>{data.info}</p>
                <button className="add-to-cart" onClick={() => addItem(data)}>
                  Add To Cart
                </button>
              </div>
            </>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
export default withRouter(SingleProduct);
