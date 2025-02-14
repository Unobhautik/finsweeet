import React from "react";
import '../../styles/Features/revision.css'; // Keeping CSS import as it is

const Revision = () => {
  return (
    <div className="revision-wrapper">
      <div className="revision-container">
        <div className="revision-image">
          <img src="/assets/images/book.png" alt="Free Revisions" />
        </div>
        <div className="revision-text">
          <h5>Free Revision Rounds</h5>
          <h2>Get free Revisions and one week of free maintenance</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revision;
