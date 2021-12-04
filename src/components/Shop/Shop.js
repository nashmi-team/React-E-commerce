import React from "react";
import data from "./Data";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div>
      <form>
        <select id="rating-filter">
          <option>Sort</option>
          <option>Low rating</option>
          <option>High rating</option>
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
