import React from 'react'
import './reviews.css'
export const Reviews = () => {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial p-3 bg-dark text-center rounded">
                <img src="https://i.imgur.com/lU2pDQv.png" width="40" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <img
                  className="rounded-circle"
                  src="https://i.imgur.com/4DEiXLa.jpg"
                  width="50"
                  alt=""
                />
                <h5>John Doe</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 bg-dark text-center rounded">
                <img src="https://i.imgur.com/lU2pDQv.png" width="40" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <img
                  className="rounded-circle"
                  src="https://i.imgur.com/nbO4gwx.jpg"
                  width="50"
                  alt=""
                />
                <h5>Tony Sam</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 bg-dark text-center rounded">
                <img src="https://i.imgur.com/lU2pDQv.png" width="40" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <img
                  className="rounded-circle"
                  src="https://i.imgur.com/xbWPOrc.jpg"
                  width="50"
                  alt=""
                />
                <h5>Marry Doe</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
