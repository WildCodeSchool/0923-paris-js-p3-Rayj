import React, { useState, useEffect } from "react";
import "./listeskills.css";

function ListeSkills({ titre, name, name2, name3, nameH, nameH1, nameH2 }) {
  // const [skills, setSkills] = useState([]);
  const [setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/hardskills`,

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
    <>
      <div className="hop">
        <h3 className="titrelistskill">{titre}</h3>
        <ul className="listskill">
          {/* {skills.map(() => ( */}
          <li className="hophop">{name}</li>
          <li className="hophop">{name2}</li>
          <li className="hophop">{name3}</li>

          {/* ))} */}
        </ul>
      </div>

      <div className="hop">
        <h3 className="titrelistskill">{titre}</h3>
        <ul className="listskill">
          {/* {skills.map(() => ( */}
          <li className="hophop">{nameH}</li>
          <li className="hophop">{nameH1}</li>
          <li className="hophop">{nameH2}</li>

          {/* ))} */}
        </ul>
      </div>
    </>
  );
}

export default ListeSkills;
