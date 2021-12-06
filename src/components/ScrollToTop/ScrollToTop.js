import React from "react";
import { useState } from "react";
import "./ScrollToTop.css";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const bodyScrolled = document.body.scrollTop;
    if (scrolled > 20 || bodyScrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="scrollTopBtn"
      onClick={scrollTop}
      style={{ display: visible ? "block" : "none" }}
    >
      <i className="fas fa-chevron-circle-up" />
    </div>
  );
};

export default ScrollToTop;
