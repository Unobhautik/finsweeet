import React, { useState } from "react";
import '../../styles/Features/faq.css';

function FAQFeatures() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much time does it take?",
      answer: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    },
    {
      question: "What is your class naming convention?",
      answer: "We follow the BEM (Block Element Modifier) methodology to ensure consistent and maintainable class naming for styles."
    },
    {
      question: "How do we communicate?",
      answer: "Communication is done via email, Zoom meetings, or messaging platforms like Slack or Teams to ensure smooth collaboration."
    },
    {
      question: "I have a bigger project. Can you handle it?",
      answer: "Yes, we have a skilled team capable of managing large-scale projects. We ensure timely delivery without compromising on quality."
    },
    {
      question: "What is your class naming convention?",
      answer: "We use a combination of BEM and custom naming conventions for unique project requirements to ensure clarity and scalability."
    }
  ];

  return (
    <div className="faqf-background">
      <div className="faqf-wrapper">
        <div className="faqf-container">
          <div className="faqf-header-section">
            <h2 className="faqf-title">Frequently</h2>
            <h2 className="faqf-title">asked question</h2>
            <p className="faqf-contact">Contact us for more info</p>
          </div>
          <div className="faqf-list">
            {faqItems.map((item, index) => (
              <div key={index} className={`faqf-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faqf-item-header" onClick={() => toggleFaq(index)}>
                  <span className="faqf-item-number">{`0${index + 1}`}</span>
                  <h3 className="faqf-item-question">{item.question}</h3>
                  <button className="faqf-item-toggle">
                    <img
                      src={activeIndex === index ? "/assets/images/icons/cross.svg" : "/assets/images/icons/plus.svg"}
                      alt={activeIndex === index ? "Close" : "Expand"}
                      className="faqf-icon"
                    />
                  </button>
                </div>
                <div className="faqf-item-content-wrapper">
                  <p className="faqf-item-content">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQFeatures;
