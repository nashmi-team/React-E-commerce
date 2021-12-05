import {useCart} from "react-use-cart";
import {withRouter} from "react-router";
import data from "../Data";

import "./SingleProduct.css";

const SingleProduct = (props) => {
    const productName = props.match.params.productName;
    const {addItem} = useCart();
    return (<div className="product">
        <p>Home/Shop/{productName}</p>
        <div className="product-container">
            {data.map((data) => {
                if (data.name === productName) {
                    return (<>
                        <img src={data.img}/>
                        <div className="product-details">
                            <h1>{data.name}</h1>
                            <h6> {data.price} JD</h6>
                            <p>{data.info}</p>
                            <button className="add-to-cart" onClick={() => addItem(data)}>
                                Add To Cart
                            </button>
                        </div>
                    </>);
                } else {
                    return null;
                }
            })}
        </div>
    </div>);
};
export default withRouter(SingleProduct);
