import React from "react";
import "./features.css";

const features = [
  {
    title: "Free Shipping",
    text: "Lorem ipsum dolor sit amet, consectetur adipisci",
    icon: "fas fa-truck",
  },
  {
    title: "Return Policy",
    text: "Lorem ipsum dolor sit amet, consectetur adipisci",
    icon: "fas fa-sync",
  },
  {
    title: "24/7 Support\n",
    text: "Lorem ipsum dolor sit amet, consectetur adipisci",
    icon: "fas fa-headset",
  },
  {
    title: "Secure Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipisci",
    icon: "fas fa-money-check-alt",
  },
];
const Features = () => {
  return (
    <section className="features-area section_gap py-5">
      <div className="container">
        <div className="features-row">
          {features.map((feature, index) => (
            <div className="single-features" key={index}>
              <span className="features-icon">
                <i className={feature.icon} />
              </span>
              <div className="desc">
                <h6 className="title-feature">{feature.title}</h6>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
