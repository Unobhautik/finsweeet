import React from "react";
import '../../styles/Home/hero.css';
import { NavLink } from "react-router-dom";

const arrowImg = "/assets/images/icons/arrowl.svg"; 
const sliderImg = "/assets/images/image.png"; 

function HeroContent() {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        {/* Left Content Section */}
        <div className="hero-content">
          <h1>Building stellar websites for early startups</h1>
          <div className="text-block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <p>eiusmod tempor incididunt.</p>
          </div>

          <div className="button-block">
            <button className="btn-rounded">
              <span className="btn-text">View our work</span>
            </button>
            <NavLink to="/pricing" className="btn-link">
              View Pricing{" "}
              <img
                src={arrowImg}
                alt="arrow icon"
                className="arrow-icon-hero"
              />
            </NavLink>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hero-image">
          <img src={sliderImg} alt="slider img" />
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
