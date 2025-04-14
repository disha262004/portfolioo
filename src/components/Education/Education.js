import React from "react";
import './Education.css';

function Education({ imageUrl, name, course, period, percentage }) {
  return (
    <div className="education-container row align-items-center my-4 py-3">
      <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
        <img src={imageUrl} alt="logo" className="education-logo" />
      </div>
      <div className="col-12 col-md-10 text-md-start text-center">
        <h4 className="education-name fw-bold">{name}</h4>
        <h5>{course}</h5>
        <p className="text-muted">
          {period}
          <br />
          {percentage}
        </p>
      </div>
    </div>
  );
}

export default Education;
