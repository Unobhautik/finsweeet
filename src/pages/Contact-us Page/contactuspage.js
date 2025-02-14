import React from "react";
import '../../styles/contactus/contactus.css'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="contact-wrapper">
      <section className="contact-section">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your Email"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="subject1">Subject</label>
                <input 
                  type="text" 
                  id="subject1" 
                  placeholder="Provide context"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject2">Subject</label>
                <input 
                  type="text" 
                  id="subject2" 
                  placeholder="Select Subject"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                placeholder="Write your question here"
                autoComplete="off"
              ></textarea>
            </div>

            <div className="button-container">
              <button type="submit" className="submit-button-cup">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;