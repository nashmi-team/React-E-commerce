import React from "react";
import data from "./Data";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="showProduct">
      {data.map((item, id) => (
        <Product
          src={item.img}
          alt={item.alt}
          productName={item.name}
          productInfo={item.name}
          price={item.price}
          item={item}
          key={id}
        />
      ))}
    </div>
  );
};
export default Shop;
