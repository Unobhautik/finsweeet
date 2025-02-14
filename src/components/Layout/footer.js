import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* Main footer background wrapper */}
            <div className="footer-background">
                <div className="wrapper-footer">
                    <div className="footer">
                        <div className="footer-left">
                            <img src="/assets/images/icons/footer-logo.svg" alt="Finsweet Logo" className="footer-logo" />
                            <p>
                                We are always open to discuss your project and improve your online presence.
                            </p>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <h6>Email me at</h6>
                                    <p>contact@website.com</p>
                                </div>
                                <div className="contact-item">
                                    <h6>Call us</h6>
                                    <p>0927 6277 28525</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-right">
                            <h2>Let's Talk!</h2>
                            <p>
                                We are always open to discuss your project, improve your online presence,
                                and help with your UX/UI design challenges.
                            </p>
                            <div className="footer-icons">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/fb.svg" alt="Facebook" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/x.svg" alt="Twitter" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/ig.svg" alt="Instagram" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/ld.svg" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom footer background wrapper */}
            <div className="footer-bottom-background">
                <div className="wrapper-footer">
                    <div className="footer-bottom">
                        <p>Copyright 2022, Finsweet.com</p>
                        <ul>
                            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
                            <li><NavLink to="/about-us" className="footer-link">About us</NavLink></li>
                            <li><NavLink to="/features" className="footer-link">Features</NavLink></li>
                            <li><NavLink to="/pricing" className="footer-link">Pricing</NavLink></li>
                            <li><NavLink to="/faq" className="footer-link">FAQ</NavLink></li>
                            <li><NavLink to="/blog" className="footer-link">Blog</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
