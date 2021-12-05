import React from "react";
import "./header.css";
import { Link } from "react-router-dom";


const Header = () => {


  
  return (
    <div className="header"  >

      <div className="overlay">
        <div className="container ">
          <div className="row ">
            <div className="col-md-12 justify-content-center align-items-center ">
              <div className="header-content ">
                <h1>
                  Welcome to <span>Cello Shop</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                  vulputate commodo lectus, ac blandit elit tincidunt id.
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
