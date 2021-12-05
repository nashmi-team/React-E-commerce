import React from "react";
import { useState, useEffect } from "react";
import data from "./Data";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  const [value, setState] = useState("Sort");
  const [data, setData] = useState(data);

  const handleChange = (e) => {
    setState({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (value) {
      case "Low price":
        setData({
          data: data.sort((a, b) => (a.price > b.price ? 1 : -1)),
        });
        break;
      case "High price":
        setData({
          data: data.sort((a, b) => (b.price > a.price ? 1 : -1)),
        });
        break;

      default:
        setData({
          data: data,
        });
        break;
    }
  };
  const { data, value } = useState;
  console.log("all data");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select id="rating-filter" onChange={handleChange} value={value}>
          <option>Sort</option>
          <option>Low price</option>
          <option>High price</option>
        </select>
        <input type="submit" value="Filter" />
      </form>
      <div className="showProduct">
        {data.map((item, id) => (
          <Product
            src={item.img}
            alt={item.alt}
            productName={item.name}
            productInfo={item.info}
            price={item.price}
            item={item}
            key={id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Shop;
