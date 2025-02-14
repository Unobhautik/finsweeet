import React from "react";
import "../../styles/Home/features.css";

const features = [
  {
    icon: "/assets/images/icons/client.svg",
    title: "Uses Client First",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: "/assets/images/icons/revision.svg",
    title: "Two Free Revision Rounds",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: "/assets/images/icons/custom.svg",
    title: "Template Customization",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: "/assets/images/icons/support.svg",
    title: "24/7 Support",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: "/assets/images/icons/delivery.svg",
    title: "Quick Delivery",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: "/assets/images/icons/approach.svg",
    title: "Hands-on Approach",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-wrapper"></div>
      <div className="container">
        <h3 className="section-title">Features</h3>
        <h2 className="section-heading">
          Design that solves <br /> problems, one product at <br /> a time
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} className="feature-image" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
