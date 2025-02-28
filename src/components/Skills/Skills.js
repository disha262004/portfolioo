import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="container py-5" id="experience">
      <h2 className="fw-bold text-center my-5">Skills</h2>
      <div className="row my-4">
        <Skill icon="media/images/java.png" skill="Java" progress="75" />
        <Skill icon="media/images/ds.jpg" skill="Data Structures" progress="50" />
        <Skill icon="media/images/algo.jpeg" skill="Algorithms" progress="50" />
        <Skill icon="media/images/oops.jpeg" skill="Object Oriented Programming" progress="55" />
      </div>
      <div className="row my-4">
        <Skill icon="media/images/html.jpg" skill="HTML" progress="75" />
        <Skill icon="media/images/css.png" skill="CSS" progress="70" />
        <Skill icon="media/images/javascript.png" skill="Javascript" progress="65" />
        <Skill icon="media/images/bootstrap.jpeg" skill="Bootstrap" progress="85" />
      </div>
      <div className="row my-4">
        <Skill icon="media/images/react.png" skill="React" progress="75" />
        <Skill icon="media/images/node.jpeg" skill="Node" progress="50" />
        <Skill icon="media/images/express.jpeg" skill="Express" progress="50" />
        <Skill icon="media/images/mongo.jpg" skill="MongoDB" progress="40" />
      </div>
      <div className="row my-4">
        <Skill icon="media/images/mysql.jpeg" skill="Mysql" progress="30" />
        <Skill icon="media/images/vs.jpeg" skill="VS Code" progress="75" />
        <Skill icon="media/images/github.png" skill="Github" progress="65" />
        <Skill icon="media/images/clipchamp.png" skill="Microsoft Clipchamp" progress="30" />
      </div>
    </div>
  );
}

export default Skills;
