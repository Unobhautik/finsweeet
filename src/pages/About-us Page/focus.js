import React from "react";
import "../../styles/aboutus/focus.css";

const manImage = "/assets/images/man.png"; // Direct reference for man.png

const Focus = () => {
  return (
    <div className="focus-background">
      <div className="focus-wrapper">
        <div className="focus-text-area">
          <div className="focus-content padding-xxlarge">
            <h2>Who we are</h2>
            <div className="focus-columns">
              <div className="focus-column">
                <h3>Goal focused</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="focus-column">
                <h3>Continuous improvement</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="focus-image">
          <img src={manImage || "/placeholder.svg"} alt="Person presenting at whiteboard" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Focus;
