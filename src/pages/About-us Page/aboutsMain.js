import React from "react";
import "../../styles/aboutus/aboutus.css";

const aboutImg = "/assets/images/about.png"; // Direct reference for about.png

const AboutSlide = () => {
  return (
    <div className="about-us-background">
      <div className="wrapper-aboutus">
        <div className="about-us-container">
          <div className="about-us-text">
            <p>About us</p>
            <h1>Our designs solve problems</h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </h5>
          </div>
          <div className="about-us-image">
            <img src={aboutImg || "/placeholder.svg"} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
