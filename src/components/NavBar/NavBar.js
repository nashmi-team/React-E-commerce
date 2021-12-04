import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./NavBar.css";
import Cart from "../Cart/Cart";
import { CartProvider } from "react-use-cart";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  { name: "Shop", link: "/shop" },

  {
    name: "Login",
    link: "/registeration",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md custom-navbar ">
      <img
        className="navbar-brand ml-3"
        id="logo_custom"
        src={logo}
        alt="logo"
      />
      <button
        className="navbar-toggler navbar-toggler-right custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse " id="collapsibleNavbar">
        <ul className="navbar-nav  justify-content-between">
          {Links.map((link, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={link.link}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-link ml-auto">
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
