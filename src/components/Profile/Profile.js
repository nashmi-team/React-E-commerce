import "./Profile.css";
import React, {useEffect} from "react";
import Api from "./Api";

const Profile = () => {
    let userData;

    // if (!localStorage.getItem("user")) alert("Please Login");
    // else {
    //   userData = JSON.parse(localStorage.getItem("user"));
    // }
    // const [{ username, email }] = userData;
    // console.log(username, email);

    const localData = JSON.parse(localStorage.getItem("react-use-cart"));
    const {items} = localData;

    const renderTableData = () => {
        return items.map((item) => {
            const {id, img, alt, name, quantity, price} = item;
            return (<tr key={id}>
                <td>{id}</td>
                <td>
                    <img src={img} alt={alt}/>
                </td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>);
        });
    };

    return (<>
        {!localStorage.getItem("user") ? ((window.location.href = "http://localhost:3000/registeration")) : (
            <div className="holder">
                <div className="holder-info">
                    <div className="userInfo">
                        <h3>My Accout</h3>
                        <hr/>
                        <h6>name: {}</h6>
                        <h6>Email: {}</h6>
                    </div>
                    <Api/>
                </div>
                <div className="container">
                    <h3>Your Orders</h3>
                    <p>This table contains your all orders:</p>
                    <table className="table" id="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>{renderTableData()}</tbody>
                    </table>
                </div>
                <span>Total:</span>
            </div>)}
    </>);
};

export default Profile;
