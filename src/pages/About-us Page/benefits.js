import React from "react";
import '../../styles/aboutus/benefits.css';

const pieces = [
  {
    icon: <img src="/assets/images/icons/approach.svg" alt="Customize with ease" className="piece-feature-image" />,
    title: "Customize with ease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: <img src="/assets/images/icons/custom.svg" alt="Perfectly Responsive" className="piece-feature-image" />,
    title: "Perfectly Responsive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: <img src="/assets/images/icons/client.svg" alt="Friendly Support" className="piece-feature-image" />,
    title: "Friendly Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
];

const Piece = () => {
  return (
    <section className="piece">
      <h2 className="piece-heading">
        The benefits of working<br />
        with us
      </h2>
      <div className="piece-cards">
        {pieces.map((piece, index) => (
          <div className="piece-card" key={index}>
            <div className="piece-icon">{piece.icon}</div>
            <h3 className="piece-card-title">{piece.title}</h3>
            <p className="piece-card-text">{piece.description}</p>
          </div>
        ))}
      </div>
      <div className="piece-footer">
        <div className="piece-logos">
          <img src="/assets/images/Logonumber.svg" alt="100,000+ Finsweet Users" className="piece-logo-image" />
          <img src="/assets/images/Logo 1.svg" alt="Logo 1" className="piece-logo-image" />
          <img src="/assets/images/Logo 2.svg" alt="Logo 2" className="piece-logo-image" />
          <img src="/assets/images/Logo 3.svg" alt="Logo 3" className="piece-logo-image" />
          <img src="/assets/images/Logo 4.svg" alt="Logo 4" className="piece-logo-image" />
          <img src="/assets/images/Logo 5.svg" alt="Logo 5" className="piece-logo-image" />
        </div>
      </div>
    </section>
  );
};

export default Piece;
