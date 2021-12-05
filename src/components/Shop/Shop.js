import React from "react";
import { useState, useEffect } from "react";
import data from "./Data";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  const [value, setValue] = useState("Sort");
  const [newData, setNewData] = useState(data);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (value) {
      case "Low price":
        setNewData({data.sort((a, b) => (a.price > b.price ? 1 : -1)),
        });
        break;
      case "High price":
        setNewData({
        data.sort((a, b) => (b.price > a.price ? 1 : -1)),
        });
        break;

      default:
        setNewData({
          data: newData,
        });
        break;
    }
  };
 
  console.log(data);
  return (
    <div>
      <form>
        <select id="rating-filter" onChange={handleChange} value={value}>
          <option value="Sort">Sort</option>
          <option value="Low price">Low price</option>
          <option value="High price">High price</option>
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
