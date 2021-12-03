import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
                <div className="overlay">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-md-12 justify-content-center align-items-center ">
                                <div className="header-content ">
                                    <h1>Welcome to <span>My Blog</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. </p>
                                    <a href="#" className="btn btn-default">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default Header;
