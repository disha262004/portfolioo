import React from "react";
import "./Project.css";

function Project({ imageUrl, title, description, githubUrl, demoUrl, liveDemo }) {
  return (
    <div className="project-container col p-4 m-3">
      <img src={imageUrl} alt="img" className="project-image" />
      <div className="row p-3">
        <h5 className="project-title mt-3 fw-bold">{title}</h5>
        <p className="project-description text-muted my-3">{description}</p>
        <a href={githubUrl} className="project-button github-button">
          GitHub
        </a>
        <a href={demoUrl} className="project-button demo-button mx-3">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Project;