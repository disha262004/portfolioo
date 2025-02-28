import React from "react";
import "./Experience.css";

function Experience({ imageUrl, name, position, period }) {
  return (
    <div className="experience-container container row m-3 p-3">
      <div className="experience-image col-1 my-1 p-3">
        <img src={imageUrl} alt="logo" />
      </div>
      <div className="col-11">
        <h4 className="experience-name">{name}</h4>
        <h5>{position}</h5>
        <p className="text-muted">{period}</p>
      </div>
    </div>
  );
}

export default Experience;