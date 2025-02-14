import React from 'react';
import { useNavigate } from 'react-router-dom';
import utility from '../../assets/images/utility.svg';
import '../css/pagenotfound.css'; 


const Pagenotfound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-icon">
          <img src={utility} alt="Error Icon" />
        </div>
        
        <h1 className="notfound-title">
          Page Not Found
        </h1>
        
        <p className="notfound-text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <button
          onClick={() => navigate('/')}
          className="notfound-button"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Pagenotfound;