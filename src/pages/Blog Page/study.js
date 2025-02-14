import React from 'react';
import '../../styles/Blog/study.css';

const Study = () => {
  return (
    <div className="study-container">
      <div className="study-content">
        <h1 className="study-title">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <p className="study-meta">
          Andrew Jonson <span>Posted on 27th January 2021</span>
        </p>
        <img src="/assets/images/studyp.png" alt="Studious Environment" className="study-image" />
        <p className="study-description">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
        </p>
        <a href="#read-more" className="study-read-more">Read more</a>
      </div>
    </div>
  );
};

export default Study;
