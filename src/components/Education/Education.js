import React from "react";
import './Education.css';

function Education({ imageUrl, name, course, period, percentage }) {
  return (
    <div className="education-container row my-4 py-3">
      <div className="col-1 my-1 p-3">
        <img src={imageUrl} alt="logo" className="education-logo" />
      </div>
      <div className="col-11">
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
