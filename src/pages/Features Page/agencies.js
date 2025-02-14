import React from "react";
import '../../styles/Features/agencies.css'; // Keeping CSS import as it is

// Define asset path from the public folder
const meeting = process.env.PUBLIC_URL + "/assets/images/meeting.png";

const Agencies = () => {
  return (
    <div className="agencies-container">
      <section className="agencies-section">
        <div className="agencies-content">
          <h6 className="subheading">Use Client-first</h6>
          <h2 className="main-heading">
            Top agencies and freelancers around the world use Client-first
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="agencies-image">
          <img src={meeting} alt="Meeting discussion" className="image" />
        </div>
      </section>
    </div>
  );
};

export default Agencies;