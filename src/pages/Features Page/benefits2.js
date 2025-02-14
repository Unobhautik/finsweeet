import React from "react";
import "../../styles/Features/benefits2.css";

const features = [
  {
    icon: "/assets/images/icons/approach.svg",
    title: "Customize with ease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: "/assets/images/icons/custom.svg",
    title: "Perfectly Responsive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: "/assets/images/icons/client.svg",
    title: "Friendly Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits">
      <h2 className="benefits-heading">
        <span className="heading-top">The benefits of working </span>
        <span className="heading-bottom">with our team</span>
      </h2>
      <div className="benefits-cards">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <div className="icon">
              <img src={feature.icon} alt={feature.title || "Feature"} className="feature-image" />
            </div>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
