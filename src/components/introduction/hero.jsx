import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="conatinerBox">
          <div className="title">
            <h1>Mini</h1>
            <h1>Collection</h1>
          </div>
          <div className="shopCollection">
            <a href="">Shop Collection</a>
          </div>
          <div className="product">
            <a href="">Miley Triangle Hair Scarf</a>|<a href="">$22.00</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
