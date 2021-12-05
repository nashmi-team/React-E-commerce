import "./Profile.css";
import React from "react";

const Profile = ({ dataWeather }) => {
  let userData;
  // let updatedData = [];

  // const [data, setData] = useState([]);

  if (!localStorage.getItem("user")) console.log("ops");
  else {
    userData = JSON.parse(localStorage.getItem("user"));
  }
  const [{ username, email }] = userData;
  console.log(username, email);

  // const { items } = updatedData;
  // console.log(items);

  // items.forEach((item) => {
  //   let tdID = document.createElement("td");
  //   let tdIMG = document.createElement("td");
  //   let tdName = document.createElement("td");
  //   let tdQuantity = document.createElement("td");
  //   let tdPrice = document.createElement("td");
  //   let tr = document.createElement("tr");
  //   let tbody = document.createElement("tbody");

  //   tdID.append(item.id);
  //   tdIMG.append(item.img);
  //   tdName.append(item.name);
  //   tdQuantity.append(item.quantity);
  //   tdPrice.append(item.price);

  //   tr.append(tdID, tdIMG, tdName, tdQuantity, tdPrice);
  //   tbody.appendChild(tr);

  //   document.querySelector("table").appendChild(tbody);
  // });

  return (
    <div className="holder">
      <div className="holder-info">
        <div className="userInfo">
          <h3>My Accout</h3>
          <hr />
          <h6>name: {username}</h6>
          <h6>Email: {email}</h6>
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
              <th>quantity</th>
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
