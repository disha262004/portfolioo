// Skill.js
import React from "react";
import "./Skill.css";

function Skill({ icon, skill, progress }) {
  return (
    <div className="skill-container col pt-2 text-center mx-3">
      <div className="skill-icon text-4xl mb-2">
        <img src={icon} alt="img" />
      </div>
      <h3 className="skill-title fw-bold px-5 fs-5 mb-3">{skill}</h3>
      <div className="skill-progress-wrapper">
        <div className="skill-progress-bar mx-3">
          <div
            className="skill-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p className="skill-progress-text mt-2 font-medium">{progress}%</p>
    </div>
  );
}

export default Skill;