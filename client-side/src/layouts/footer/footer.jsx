import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="unsenLogo">
          <div className="logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0651/3157/7585/files/logo_black-Unsen.svg?v=1658817149"
              alt="unsen-logo"
            />
          </div>
          <div className="title">
            <p>
              Unsen is an exciting contemporary brand which focuses on
              high-quality products graphics with a British style
            </p>
          </div>
          <div className="location">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="locationRight">
              <p>30 Buttonwood St.Pataskala OH 43062</p>
              <p>(+1)-613-333-0101</p>
              <p>sayhello@boni.com</p>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="head">
            <h4>Customer Services</h4>
          </div>
          <div className="body">
            <ul>
              <li>FAQs</li>
              <li>Collections & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Terms & Conditions</li>
              <li>Delivery Return</li>
              <li>Store Locations</li>
            </ul>
          </div>
        </div>
        <div className="storeis">
          <div className="head">
            <h4>Our Stories</h4>
          </div>
          <div className="body">
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Shoes</li>
              <li>Watches</li>
              <li>Jewelry</li>
              <li>Bags</li>
            </ul>
          </div>
        </div>
        <div className="stayConnected">
        <div className="head">
          <h4>Stay Connected</h4>
        </div>
        <div className="body">
          <input type="email" placeholder="Your email address" />
          <button>
            <i class="fa-brands fa-telegram"></i>
          </button>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Footer;
