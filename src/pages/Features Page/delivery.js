import React from "react";
import '../../styles/Features/delivery.css'; // Keeping CSS import unchanged

const DeliverySection = () => {
  return (
    <div className="delivery-wrapper">
      <div className="delivery-container">
        {/* Image Section */}
        <div className="delivery-image">
          <img src="/assets/images/laptop.png" alt="Working on laptop" />
        </div>

        {/* Text Section */}
        <div className="delivery-text">
          <h5>Quick Delivery</h5>
          <h2>Guaranteed 1 week delivery for standard five pager website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
