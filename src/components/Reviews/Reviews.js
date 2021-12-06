import React from "react";
import "./reviews.css";

const reviews = [
  {
    id: 1,
    name: "Иван Иванов",
    text: "Всем привет! Я пришел в компанию в очередной раз",
    imgSrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    position: "Android разработчик",
  },
  {
    id: 2,
    name: "Петр Петров",
    text: "Всем привет! Я пришел в компанию в очередной раз",
    imgSrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    position: "Android разработчик",
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
