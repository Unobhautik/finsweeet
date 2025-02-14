import React, { useState } from "react";
import "../../styles/Home/clients.css";


const P = "/assets/images/icons/p.svg"; 
const CF = "/assets/images/icons/cf.png"; 
const GreaterThan = "/assets/images/icons/greaterthan.svg"; 
const LessThan = "/assets/images/icons/lessthan.svg"; 

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');

  const testimonials = [
    {
      text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
      name: "Jenny Wilson",
      position: "Vice President",
      image: P
    },
    {
      text: "Working with this agency has been a very positive experience. They really know what they are doing. I am extremely satisfied!",
      name: "John Williams",
      position: "Co-founder",
      image: CF
    }
  ];

  const handlePrev = () => {
    setSlideDirection('prev');
    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDirection('next');
    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="clients-background">
      <div className="clients-wrapper">
        <div className="clients-container">
          <div className="clients-header">
            <h2>What our clients<br />say about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div className="clients-testimonial">
            <div className={`testimonials-slider ${slideDirection}`}>
              <div className="testimonial-text">
                <div 
                  className="testimonial-slides-container"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                      <p>{testimonial.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="client-info">
              <div className="clients-name">
                <img 
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"} 
                  alt={testimonials[currentTestimonial].name} 
                  className="client-photo" 
                />
                <div className="client-details">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
              <div className="clients-navigation">
                <button 
                  className={`nav-button ${currentTestimonial === 0 ? '' : 'active'}`} 
                  onClick={handlePrev}
                >
                  <img src={LessThan || "/placeholder.svg"} alt="Previous" className="nav-icon" />
                </button>
                <button 
                  className={`nav-button ${currentTestimonial === 1 ? 'active' : ''}`} 
                  onClick={handleNext}
                >
                  <img src={GreaterThan || "/placeholder.svg"} alt="Next" className="nav-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;