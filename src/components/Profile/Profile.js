import "./Profile.css";
import React from "react";

const Profile = ({ dataWeather }) => {
  console.log("Ahmad");
  return (
    <div className="holder">
      <div className="holder-info">
        <div className="userInfo">
          <h3>My Accout</h3>
          <hr />
          <h6>name: Ahmad</h6>
          <h6>Email: user@gmail.com</h6>
        </div>
        <div className="weatherInfo">
          <ul>
            <li className="city">{dataWeather.name}</li>
            <li className="temp">
              {dataWeather.temp}
              <sup>°C</sup>
            </li>
            <li>
              <img src={dataWeather.icon} alt="" className="icon" />
            </li>
            <li className="description">{dataWeather.description} </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h3>Your Orders</h3>
        <p>This table contains your all orders:</p>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Img</td>
              <td>gitar</td>
              <td>1000$</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Img</td>
              <td>gitar</td>
              <td>1000$</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Img</td>
              <td>gitar</td>
              <td>1000$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <span>Total:</span>
    </div>
  );
};

export default Profile;
