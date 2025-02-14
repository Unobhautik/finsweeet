import React from 'react';
import '../../styles/Portfolio/portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <p className="portfolio-subtitle">What we created</p>
                <h1 className="portfolio-title">Our Work Portfolio</h1>
                <p className="portfolio-description">
                    We help teams create great digital products by providing them with tools and technology
                    to make the design-to-code process universally accessible.
                </p>
                <div className="portfolio-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/icons/fbn.svg" alt="Facebook" className="icon-image" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/icons/xn.svg" alt="X" className="icon-image" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/icons/ign.svg" alt="Instagram" className="icon-image" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/icons/ldn.svg" alt="LinkedIn" className="icon-image" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
