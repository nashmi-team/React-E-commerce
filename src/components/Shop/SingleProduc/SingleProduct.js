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
            <div className="product-container" key={id}>
              <img src={data.img} alt={data.alt} />
              <h1>{data.name}</h1>
              <h2> Price {data.price} JD</h2>
              <p>{data.info}</p>
              <button className="add_to_cart " onClick={() => addItem(data)}>
                Add To Cart
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
export default withRouter(SingleProduct);
