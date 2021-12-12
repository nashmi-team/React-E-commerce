import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
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
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 768;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

  return (
    <nav className="navbar navbar-expand-md custom-navbar fixed-top ">
     <Link to="/" className="navbar-brand">
         <img
             className="navbar-brand ml-3"
             id="logo_custom"
             src="../../assets/Logo.png"
             alt="logo"
         />
     </Link>
      <button
        className="navbar-toggler navbar-toggler-right  "
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        aria-expanded="false" aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={`${isMobile ? "collapse navbar-collapse" : "collapse navbar-collapse center-collapse "}`}  id="collapsibleNavbar">
        <ul className="navbar-nav ">
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
              <Link className="nav-link" to="/profile">
                My Account
              </Link>
            ) : null}
          </li>
          <li className="nav-item">
            {logged ? (
              <Link onClick={handleLogout} className="nav-link" to="/">
                Logout
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
        <Cart logged={logged} setLogged={setLogged} />
      </div>
    </nav>
  );
};

export default Navbar;
