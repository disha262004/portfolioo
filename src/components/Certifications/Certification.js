import React from "react";
import "./Certification.css"; // Import the CSS file

function Certification({ imageUrl, title, certificateUrl, description }) {
  return (
    <div className="certification-container col d-flex align-items-center py-3">
      <div className="certification-logo">
        <img src={imageUrl} alt="logo" />
      </div>
      <div className="certification-details">
        <a className="certification-title fs-4" href={certificateUrl}>
          {title}
        </a>
        <p className="fs-5">{description}</p>
      </div>
    </div>
  );
}

export default Certification;
