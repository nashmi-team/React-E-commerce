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
  {
    name: "Login",
    link: "/registeration",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md bg-dark custom-navbar ">
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
        <span className="navbar-toggler-icon " />
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
        <Link className="nav-link ml-auto" to="/cart">
          <Cart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
