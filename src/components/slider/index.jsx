import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './style.css';
const CategorySlider = () => {
    const images = [
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/16-1.jpg?v=1660729512&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/16-2.jpg?v=1660729512&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/16-3.jpg?v=1660729512&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/16-4.jpg?v=1660729512&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/162.jpg?v=1661568582&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/163.jpg?v=1661568582&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/164.jpg?v=1661568582&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/16-1.jpg?v=1660729512&width=600",
        "https://cdn.shopify.com/s/files/1/0651/3157/7585/files/16-2.jpg?v=1660729512&width=600",
    ]
  return (

<div className="shopByCategory">
    <div className="textContainer">
        <div className="title">
            <h3>
                 Shop <h3>by</h3> <span>categories</span>
            </h3>
        </div>
        <div className="viewAllBtn">
            <button className='green'>View All</button>
        </div>
    </div>
   <div>
   <Slide>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            <span>Slide 1</span>
        </div>
        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            <span>Slide 2</span>
        </div>
        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            <span>Slide 3</span>
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[3]})` }}>
            <span>Slide 1</span>
        </div>
        <div style={{ 'backgroundImage': `url(${images[4]})` }}>
            <span>Slide 2</span>
        </div>
        <div style={{ 'backgroundImage': `url(${images[5]})` }}>
            <span>Slide 3</span>
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[6]})` }}>
            <span>Slide 1</span>
        </div>
        <div style={{ 'backgroundImage': `url(${images[7]})` }}>
            <span>Slide 2</span>
        </div>
        <div style={{ 'backgroundImage': `url(${images[8]})` }}>
            <span>Slide 3</span>
        </div>
    </div>
  </Slide>
   </div>
</div>


  
  )
}

export default CategorySlider