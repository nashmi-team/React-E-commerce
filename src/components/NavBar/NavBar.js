import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./NavBar.css";
import Cart from "../Cart/Cart";
import { useCart } from "react-use-cart";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Team",
    link: "/our-team",
  },
  { name: "Shop", link: "/shop" },
];

const Navbar = ({ logged, setLogged }) => {
  const { emptyCart, items } = useCart();
  const handleLogout = () => {
    setLogged(false);
    emptyCart(items);
    // sessionStorage.removeItem('loggedAccount');
  };

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
          <li className="nav-item">
            {logged ? (
              <Link onClick={handleLogout} className="nav-link" to="/">
                Logout
              </Link>
            ) : null}
          </li>
          <li className="nav-item">
            {logged ? (
              <Link className="nav-link" to="/dataWeather">
                My Account
              </Link>
            ) : null}
          </li>
          <li className="nav-item">
            {!logged ? (
              <Link
                onClick={handleLogout}
                className="nav-link"
                to="/registeration"
              >
                Login
              </Link>
            ) : null}
          </li>
        </ul>
      </div>
      <div className=" ml-auto">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
