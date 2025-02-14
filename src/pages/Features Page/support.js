import React from "react";
import '../../styles/Features/support.css'; // Keeping CSS import unchanged

const Support = () => {
  return (
    <div className="support-wrapper">
      <div className="support-container">
        <div className="support-text">
          <h4>24/7 Support</h4>
          <h2>
            Working with us, you will be <br /> getting 24/7 priority support
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="support-image">
          <img src="/assets/images/call.png" alt="24/7 Support" />
        </div>
      </div>
    </div>
  );
};

export default Support;
