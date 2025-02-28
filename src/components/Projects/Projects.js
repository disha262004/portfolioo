import React from "react";
import Project from "./Project";
function Skills() {
  return (
    <div
      className="container mt-3 py-5"
      id="projects"
    >
      <h2 className="fw-bold text-center my-5">Projects</h2>
      <div className="row">
        <Project
          imageUrl="media/images/wanderlust.png"
          title="Wanderlust - Explore the World"
          description="Node.js, Express.js, MongoDB, Bootstrap, Built on MVC Framework"
          githubUrl="https://github.com/disha262004/Wanderlust?tab=readme-ov-file"
          demoUrl="https://wanderlust-e8zp.onrender.com/listings"
        />

        <Project
          imageUrl="media\images\finxchangeImg.png"
          title="FinXChange - A Trading Platform"
          description="HTML, CSS, Bootstrap, Javascript, React"
          githubUrl="https://github.com/disha262004/FinXchange/tree/home-component"
          demoUrl=""
        />
        <Project
          imageUrl="media\images\netflixImg.png"
          title="Netflic Clone"
          description="HTML, CSS"
          githubUrl="https://github.com/disha262004/Netflix-Clone"
          demoUrl="https://netflix-clone-git-main-disha262004s-projects.vercel.app/"
        />
      </div>
      <div className="row">
        <Project
          imageUrl="media\images\portfolioImg.png"
          title="My Portfolio"
          description="HTML, CSS, Javascript, React"
          githubUrl="https://github.com/disha262004/Portfolio"
          demoUrl="https://disha262004.github.io/Portfolio/"
        />
        <Project
          imageUrl="\media\images\Tians-charity.png"
          title="Tians Charity Website"
          description="HTML, CSS, Bootstrap, Javascript"
          githubUrl="https://github.com/disha262004/Tians-Charity"
          demoUrl="https://disha262004.github.io/Tians-Charity/"
        />
        <Project
          imageUrl="\media\images\Symon-says.png"
          title="Symon Says Game"
          description="HTML, CSS, Javascript"
          githubUrl="https://github.com/disha262004/Symon-Says-Game"
          demoUrl="https://disha262004.github.io/Symon-Says-Game/"
        />
      </div>
    </div>
  );
}

export default Skills;
