import React from "react";
import Certification from "./Certification";

function Certifications() {
  return (
    <div className="container py-3" id="certification">
      <h2 className="fw-bold text-center my-5">Certifications</h2>
      <div className="row gy-4">
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/apna-college.png"
            title="Apna College"
            certificateUrl="certificates/java apna college.pdf"
            description="Data Structures And Algorithms with Java"
          />
        </div>
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/apna-college.png"
            title="Apna College"
            certificateUrl="certificates/fullstack.pdf"
            description="Full Stack Web Development"
          />
        </div>
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/great-learning.png"
            title="Great Learning"
            certificateUrl="certificates/Great-learning-c.pdf"
            description="C Language for Beginners"
          />
        </div>
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/great-learning.png"
            title="Great Learning"
            certificateUrl="certificates/great-learning-html.pdf"
            description="HTML, Attributes And Tags"
          />
        </div>
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/cisco.png"
            title="Cisco Networking Academy"
            certificateUrl="certificates/Networking_Essentials.pdf"
            description="Networking Essentials"
          />
        </div>
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/cisco.png"
            title="Cisco Networking Academy"
            certificateUrl="certificates/PKT.pdf"
            description="Introduction to Packet Tracer"
          />
        </div>
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/cisco.png"
            title="Cisco Networking Academy"
            certificateUrl="certificates/Introduction_to_Cybersecurity.pdf"
            description="Introduction to Cybersecurity"
          />
        </div>
        <div className="col-12 col-md-6">
          <Certification
            imageUrl="media/images/cisco.png"
            title="Cisco Networking Academy"
            certificateUrl="certificates/Cybersecurity_Essentials.pdf"
            description="Cyber Security Essentials"
          />
        </div>
      </div>
    </div>
  );
}

export default Certifications;
