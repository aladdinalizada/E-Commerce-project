import React from "react";
import "./topHeader.scss";
const TopHedaer = () => {
  return (
    <div>
      <div className="topHeader">
        <div className="phoneAndMailBox">
          <div className="phone">
            <i class="fa-solid fa-phone"></i>
            <p>
              {" "}
              <a href="tel:+1-202-555-0184">+1-202-555-0184</a>
            </p>
          </div>
          |
          <div className="mail">
            {/* <i class="fa-thin fa-envelope"></i> */}
            <i class="fa-solid fa-envelope"></i>

            <p>
              <a href="mailto:support@unsen.com">support@unsen.com</a>
            </p>
          </div>
        </div>
        <div className="topHeaderleftBox">
          <div className="languageAndcurrencyBox">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="arabic">عربي</option>
            </select>
            <select name="currency" id="currency">
              <option value="usd">USD</option>
              <option value="koreawon">KRW</option>
              <option value="euro">EUR</option>
            </select>
          </div>
          |
          <div className="socialMediaBox">
            <div className="socialMedia">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-telegram"></i>
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHedaer;
