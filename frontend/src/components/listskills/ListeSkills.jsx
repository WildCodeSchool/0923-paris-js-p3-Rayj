import React from "react";
import "./listeskills.css";

function ListeSkills({ titre, skills }) {
  return (
    <div className="hop">
      <h3 className="titrelistskill">{titre}</h3>
      <ul className="listskill">
        {skills.map((skill) => (
          <li className="hophop" key={skill}>
            {skill.skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeSkills;
