import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/frequently.css";

function Frequently() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How much time does it take?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "What is your class naming convention?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do you communicate?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "I have a bigger project. Can you handle it?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "What is your class naming convention?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="freq-background">
      <div className="freq-wrapper">
        <div className="freq-container">
          <div className="freq-left-column">
            <h2 className="freq-title">Frequently</h2>
            <h2 className="freq-title">asked questions</h2>
            <Link to="/contact" className="freq-contact">
              Contact us for more info
            </Link>
          </div>
          <div className="freq-right-column">
            {faqData.map((faq, index) => (
              <div 
                className={`freq-item ${activeIndex === index ? "active" : ""}`} 
                key={index}
              >
                <div 
                  className="freq-item-header" 
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`freq-item-number freq-item-number-${index + 1}`}>
                    {`0${index + 1}`}
                  </span>
                  <h3 className="freq-item-question">{faq.question}</h3>
                  <button className="freq-item-toggle">
                    <img
                      src={activeIndex === index ? "/assets/images/icons/cross.svg" : "/assets/images/icons/plus.svg"}
                      alt={activeIndex === index ? "Close" : "Expand"}
                    />
                  </button>
                </div>
                <div
                  className="freq-item-content-wrapper"
                  style={{
                    maxHeight: activeIndex === index ? "1000px" : "0px",
                    opacity: activeIndex === index ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  }}
                >
                  <p className="freq-item-content">{faq.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frequently;
