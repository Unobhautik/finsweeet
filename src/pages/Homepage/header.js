import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Home/header.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header fixed-wdt">
      <div className="logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="right-actions">
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-us" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/features" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/pricing" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/faq" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "contact-us active" : "contact-us"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;