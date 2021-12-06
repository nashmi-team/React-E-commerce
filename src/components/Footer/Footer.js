import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-container">
        <div className="content">
          <div className="footer-content-item">
            <ul>
              <li>
                <i className="social fab fa-twitter"></i>
              </li>
              <li>
                <i className=" social fab fa-facebook-square"></i>
              </li>
              <li>
                <i className="social fab fa-instagram"></i>
              </li>
              <li>
                <i className="social fab fa-linkedin"></i>
              </li>
            </ul>
            copyright &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
