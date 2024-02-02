import React, { useState, useEffect, useMemo } from "react";
import "./listeskills.css";

function ListeSkills({ titre, user }) {
  const [softSkills, setSoftSkills] = useState();
  const [filter] = useState([]);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/candidates/competences`,
          { method: "GET" }
        );

        if (skillsResponse.status === 200) {
          const skillsData = await skillsResponse.json();
          setSoftSkills(skillsData);
        } else {
          console.error("Erreur lors de la récupération des compétences");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, []);
  const filteredSoftSkills = useMemo(() => {
    if (!softSkills) return [];
    return softSkills.filter((use) => use.Users_idUsers === user.Id_Users);
  }, [softSkills, filter, user]);
  return (
    <div className="hop">
      <h3 className="titrelistskill">
        {titre === "Softskills" ? titre : "Hardskills"}
      </h3>
      {filteredSoftSkills.map((hi) => (
        <ul className="listskill" key={hi.User_idUsers}>
          <li>{hi.Softskill_Name}</li>
          <li>{hi.Hardskill_Name}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListeSkills;
