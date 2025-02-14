import React from "react";
import "../../styles/aboutus/process.css";

const circleImage = "/assets/images/icons/Circle.svg"; // Direct reference for Circle.png

const Process = () => {
  const steps = [
    { title: "Planning", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Conception", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div className="process-background"> {/* Parent div with background */}
      <div className="wrapper-process"> {/* Child div with fixed width */}
        <section className="process-section">
          <h2 className="process-title">The process we follow</h2>
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <img src={circleImage} alt={`${step.title} Circle`} className="circle-image" />
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
