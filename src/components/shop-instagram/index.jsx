import React from "react";
import { Slide } from "react-slideshow-image";
import './index.scss'
const ShopInstagram = () => {
  let slideImage = [
    "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/ins-1Artboard_7.jpg?v=1663551465&width=400",
    "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/ins-1Artboard_4.jpg?v=1663551465&width=400",
    "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/ins-1Artboard_10.jpg?v=1663551459&width=400",
    "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/ins-1Artboard_9.jpg?v=1663551465&width=400",
    "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/ins-1Artboard_3.jpg?v=1663551465&width=400",
    "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/ins-1Artboard_8.jpg?v=1663551468&width=400",
    "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/ins-1Artboard_2.jpg?v=1663551465&width=400",
  ];
  return (
    <div>
      <div className="ShopInstagram">
        <div className="title">
          <div className="titleLeft">
            <h3>Shop</h3>
            <h3>Instagram</h3>
          </div>
          <div className="titleRight">
            <p>
              Tag @unsen in your Instagram photos for a chance to be featured
              here.
            </p>
            <p>Find more inspiration on our Instagram.</p>
          </div>
        </div>
        <div className="sliderBody">
          <Slide>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${slideImage[0]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[1]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[2]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[3]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[4]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
            </div>
            <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${slideImage[2]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[3]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[4]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[5]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
              <div style={{ backgroundImage: `url(${slideImage[6]})` }}>
                {/* <span>Slide 1</span> */}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default ShopInstagram;
