import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./NavBar.css";
import Cart from "../Cart/Cart";

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
  {
    name: "My Account",
    link: "/dataWeather",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <img
        className="navbar-brand ml-3"
        id="logo_custom"
        src={logo}
        alt="logo"
      />
      <button
        className="navbar-toggler navbar-toggler-right  "
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse " id="collapsibleNavbar">
        <ul className="navbar-nav">
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
      </div>
      <div className=" ml-auto">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
