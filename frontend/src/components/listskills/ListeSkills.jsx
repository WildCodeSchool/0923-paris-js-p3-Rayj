import React, { useState, useEffect } from "react";
import "./listeskills.css";

function ListeSkills({ titre }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/softskills`,

          {
            method: "GET",
          }
        );

        if (response.status === 200) {
          const data = await response.json();
          setSkills(data || []);
        } else {
          console.error("Erreur lors de la récupération des données ");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [titre]);

  return (
    <div className="hop">
      <h3 className="titrelistskill">{titre}</h3>
      <ul className="listskill">
        {skills.map((skill) => (
          <li className="hophop" key={skill.id_Softskills}>
            {skill.Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeSkills;
