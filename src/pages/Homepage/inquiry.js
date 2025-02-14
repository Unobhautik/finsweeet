import React from "react";
import "../../styles/Home/inquiry.css";

const arrowImg = "/assets/images/icons/arrowl.svg"; // Reference from public folder

const Inquiry = () => {
    return (
        <div className="inquiry-background">
            <div className="inquiry-wrapper">
                <div className="inquiry-container">
                    <div className="left-section">
                        <h2>Building stellar websites for early startups</h2>
                        <div className="styled-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</span>
                        </div>
                    </div>
                    <div className="right-section">
                        <h3 className="inquiry-title">Send Inquiry</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <form className="inquiry-form">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="form-input"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-input"
                                required
                            />
                            <input
                                type="url"
                                placeholder="Paste your Figma design URL"
                                className="form-input"
                                required
                            />
                            <button type="submit" className="submit-button">
                                Send an inquiry
                            </button>
                        </form>
                        <p className="contact-link">
                            Get in touch with us{" "}
                            <img src={arrowImg} alt="Arrow" className="arrow-icon-m" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiry;
