import React from "react";
import "./Skill.css";

function Skill({ icon, skill, progress }) {
  return (
    <div className="col-md-4 col-lg-2 skill-container align-items-center text-center mb-4 mx-3">
      <div className="skill-icon mb-2 ">
        <img src={icon} alt={skill} className="img-fluid" style={{ maxHeight: "60px" }} />
      </div>
      <h3 className="skill-title fw-bold fs-6">{skill}</h3>
      <div className="skill-progress-wrapper mt-2">
        <div className="skill-progress-bar mx-auto">
          <div
            className="skill-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p className="skill-progress-text mt-2 ">{progress}%</p>
    </div>
  );
}

export default Skill;
