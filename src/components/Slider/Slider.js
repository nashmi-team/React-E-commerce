import React from "react";
import data from ".././Shop/Data";
import "../ProductSlider/item.css";
import { useCart } from "react-use-cart";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Slider(props) {
  //options for slider owl
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,

    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    // slideTransition:"smooth",
    smartSpeed: 1500,
    center: true,
    responsiveClass: true,

    // animateIn: 'linear',
    // animateOut: 'linear',
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding:25,
        margin: 10,

      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    addItem(product);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your item has been added to cart',
      showConfirmButton: false,
      timer: 1200
    })

  };

  return (
    <>
      <div className="title-section text-center mb-5 title">
        <h2 className="">Featured Products</h2>
      </div>
      <OwlCarousel items={4} {...options} className="owl-theme container" loop>
        {data.map((data, index) => {
          return (
            <div key={index} className="">
              <div className="product-card">
                <div className="badge">Hot</div>
                <div className="product-tumb">
                  <img src={data.img} alt={data.alt} />
                </div>
              </div>
              <div className="product-details">
                <h4>
                  <Link to={`/shop/${data.name}`}>{data.name}</Link>
                </h4>
                <div className="product-bottom-details">
                  <div className="product-price">
                    {data.price}JD
                    <i
                      className="fas fa-cart-plus fa-2x addcart-icon"
                      onClick={() => handleAddToCart(data)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </>
  );
}

export default Slider;
