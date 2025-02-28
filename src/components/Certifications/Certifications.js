import React from "react";
import Certification from "./Certification";
function Certifications() {
  return (
    <div className="container py-3" id="certification">
      <h2 className="fw-bold text-center my-5">Certifications</h2>
      <div className="row my-4">
        <Certification
          imageUrl="media\images\apna-college.png"
          title="Apna College"
          certificateUrl="certificates\java apna college.pdf"
          description="Data Structures And Algorithms with Java"
        />
        <Certification
          imageUrl="media\images\apna-college.png"
          title="Apna College"
          certificateUrl="certificates\fullstack.pdf"
          description="Full Stack Web Development"
        />
      </div>
      <div className="row my-4">
      <Certification
          imageUrl="media/images/great-learning.png"
          title="Great Learning"
          certificateUrl="certificates\Great-learning-c.pdf"
          description="C Language for Biginners"
        />
        <Certification
          imageUrl="media/images/great-learning.png"
          title="Great Learning"
          certificateUrl="certificates\great-learning-html.pdf"
          description="HTML, Attributes And Tags"
        />
      </div>
      <div className="row my-4">
      <Certification
          imageUrl="media\images\cisco.png"
          title="Cisco Networking Academy"
          certificateUrl="certificates\Networking_Essentials.pdf"
          description="Networking Essentials"
        />
        <Certification
          imageUrl="media\images\cisco.png"
          title="Cisco Networking Academy"
          certificateUrl="certificates\PKT.pdf"
          description="Introduction to Packet Tracer"
        />
      </div>
      <div className="row my-4">
      <Certification
          imageUrl="media\images\cisco.png"
          title="Cisco Networking Academy"
          certificateUrl="certificates\Introduction_to_Cybersecurity.pdf"
          description="Introduction to Cybersecurity"
        />
        <Certification
          imageUrl="media\images\cisco.png"
          title="Cisco Networking Academy"
          certificateUrl="certificates\Cybersecurity_Essentials.pdf"
          description="Cyber Security Essentials"
        />
      </div>
    </div>
  );
}
export default Certifications;
