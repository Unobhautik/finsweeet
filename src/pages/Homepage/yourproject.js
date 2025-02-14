import React from 'react';
import '../../styles/Home/yourproject.css';
import { Link } from "react-router-dom";

const arrowIcon = "/assets/images/icons/arrowthrow.svg"; // Reference the public directory
const arrowIcon2 = "/assets/images/icons/yellow-arrow.svg"; // Reference the public directory

function YourProject() {
  return (
    <div className="yourproject-background">
      <div className="yourproject-wrapper">
        <div className="yourproject">
          {/* Header Section */}
          <div className="text">
            <h2>View our projects</h2>
            <Link to="/our-work" className="view-more-link">
              View More <img src={arrowIcon} alt="Arrow Icon" className="arrowproject" />
            </Link>
          </div>

          {/* Projects Section */}
          <div className="box-parent">
            {/* Project 1 */}
            <div className="child">
              <div className="child-text">
                <h3>
                  Workhub office Webflow <br /> Webflow Design
                </h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. <br /> Pellentesque et velit aliquam
                </p>
                <Link to="/" className="project-link">
                  View project <img src={arrowIcon2} alt="Arrow Icon" className="arrow-icon" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="child">
              <div className="box">
                <div className="child-text">
                  <h5>Unisaas Website</h5>
                  <h5>Design</h5>
                  <Link to="/" className="portfolio-link">
                    View portfolio <img src={arrowIcon2} alt="Arrow Icon" className="arrow-icon" />
                  </Link>
                </div>
              </div>
              <div className="box">
                <div className="child-text">
                  <h5>Redesign Project</h5>
                  <p>Innovative design for a seamless user experience</p>
                  <Link to="/" className="portfolio-link">
                    View project <img src={arrowIcon2} alt="Arrow Icon" className="arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourProject;
