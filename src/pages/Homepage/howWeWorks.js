import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/howwework.css";

function HowWeWorks() {
    return (
        <div className="howwework-background">
            <div className="howwework-wrapper">
                <div className="howwework">
                    <div className="child">
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <Link to="/contact">
                            Get in touch with us 
                            <img src="/assets/images/arrowcontact.svg" alt="Arrow" className="arrowcontact" />
                        </Link>
                    </div>
                    <div className="child">
                        <div className="child-box">
                            <div className="img">
                                <img src="/assets/images/Group1.png" alt="Strategy" />
                            </div>
                            <div className="txt">
                                <h3>Strategy</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </div>
                        </div>
                        <div className="child-box">
                            <div className="img">
                                <img src="/assets/images/Group2.png" alt="Wireframing" />
                            </div>
                            <div className="txt">
                                <h3>Wireframing</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </div>
                        </div>
                        <div className="child-box">
                            <div className="img">
                                <img src="/assets/images/Group3.png" alt="Design" />
                            </div>
                            <div className="txt">
                                <h3>Design</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </div>
                        </div>
                        <div className="child-box">
                            <div className="img">
                                <img src="/assets/images/Group4.png" alt="Development" />
                            </div>
                            <div className="txt">
                                <h3>Development</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWeWorks;
