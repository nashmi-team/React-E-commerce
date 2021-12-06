import React from "react";
import "./reviews.css";

const reviews = [
  {
    id: 1,
    name: "Beethoven",
    text: "What a great piece of music!",
    imgSrc: "../assest/1.jpg",
    position: "Composer pianist",
  },
  {
    id: 2,
    name: "Wolfgang Amadeus Mozart",
    text: "Such a nice company",
    imgSrc: "../assest/Elon.jpg",
    position: "Composer",
  },
];

export const Reviews = () => {
  return (
    <>
      <div className="container-xl reviews-container ">
        <div className="row">
          <div className="col-sm-12 title ">
            <h2 className="">
              What <b>our customers</b> are saying
            </h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="row reviews-section">
                {reviews.map((review) => (
                  <div className="col-sm-6" key={review.id}>
                    <div className="media">
                      <img src={review.imgSrc} className="mr-3" alt="" />
                      <div className="media-body">
                        <div className="testimonial">
                          <p>{review.text}</p>
                          <p className="overview">
                            <b>{review.name}</b>, {review.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
