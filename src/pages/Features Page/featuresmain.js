import React, { useEffect, useState } from "react";
import "../../styles/Features/features.css"; // Keeping CSS import as it is

// Define asset paths from the public folder
const mainBar = process.env.PUBLIC_URL + "/assets/images/mainbar.svg";
const bar = process.env.PUBLIC_URL + "/assets/images/bard.svg";
const gear = process.env.PUBLIC_URL + "/assets/images/gear.svg";

const HeroContent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="features-wrapper">
      <div className="new-hero">
        <div className="new-hero-content">
          <h1>All the features</h1>
          <h1>you need</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="new-hero-buttons">
            <button className="btn-rounded-2">View Pricing</button>
          </div>
        </div>
        
        <div className="new-hero-image">
          <img src={mainBar} alt="Main Bar" className="mainbar-image" />
          <img 
            src={bar} 
            alt="Bar" 
            className="bar-image" 
            style={{ transform: `translateX(${scrollY * 0.2}px)` }} 
          />
          <img 
            src={gear} 
            alt="Gear" 
            className="gear-image" 
            style={{ transform: `rotate(${scrollY * 1.2}deg)` }} 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
