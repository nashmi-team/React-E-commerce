import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="overlay">
        <div className="container ">
          <div className="row ">
            <div className="col-md-12 justify-content-center align-items-center ">
              <div className="header-content ">
                <h1>
                  Welcome to <span>Cello Shop</span>
                </h1>
                <p>
                  Cello is an e-commerce website in Jordan, to sell the musical
                  instruments of all kinds , in a way to make purchasing and
                  owning musical instruments easy for everyone, by providing
                  great prices and excellent service, regardless of where you
                  live.
                </p>
                <Link to="/shop" className="btn btn-primary btn-shop">
                  Shop Now <i className="fas fa-shopping-cart"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
