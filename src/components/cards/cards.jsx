import React from "react";
// import image from "../cards/customer-service.png";
import "./cards.scss";

const CardsPropation = () => {
  return (
    <div>
      <div className="cardContainer">
        <div className="card">
          <i className="fa-solid fa-box"></i>
          <div className="text">
            <h3>Shipping Worldwide</h3>
            <p>Free shipping on all US order or order above $100</p>
          </div>
        </div>

        <div className="card">
          <i className="fa-solid fa-rotate-left"></i>
          <div className="text">
            <h3>14 Days Return</h3>
            <p>Simply return it within 30 days for an exchange.</p>
          </div>
        </div>
        <div className="card">
          <i className="fa-solid fa-shield"></i>
          <div className="text">
            <h3>Security Payment</h3>
            <p>We ensure secure payment with PEV</p>
          </div>
        </div>
        <div className="card">
          <i className="fa-solid fa-headset"></i>
          <div className="text">
            <h3>24/7 Support</h3>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPropation;
