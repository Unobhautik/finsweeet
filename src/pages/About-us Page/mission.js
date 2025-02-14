import React from "react";
import '../../styles/aboutus/mission.css';

const missionImage1 = "/assets/images/mission1.png"; // Direct reference
const missionImage2 = "/assets/images/mission2.png"; // Direct reference

const Missions = () => {
  return (
    <div className="background-wrapper">
      <div className="wrapper-mission">
        <div className="missions-section">
          <div className="mission-container">
            <div className="text-container">
              <h3>Our Mission</h3>
              <h1>Inspire, Innovate, Share</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="image-container">
              <img src={missionImage1} alt="Our Mission" />
            </div>
          </div>
          <div className="mission-container">
            <div className="image-container">
              <img src={missionImage2} alt="Our Vision" />
            </div>
            <div className="text-container">
              <h3>Our Vision</h3>
              <h1>Laser Focus</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
