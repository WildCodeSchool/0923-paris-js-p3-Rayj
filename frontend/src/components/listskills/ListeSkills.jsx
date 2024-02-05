import React, { useState, useEffect, useMemo } from "react";
import "./listeskills.css";

function ListeSkills({ titre, user }) {
  const [competences, setCompetences] = useState();
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
          setCompetences(skillsData);
        } else {
          console.error("Erreur lors de la récupération des compétences");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, []);

  const filteredCompetences = useMemo(() => {
    if (!competences) return [];
    return competences.filter((use) => use.Users_idUsers === user.Id_Users);
  }, [competences, filter, user]);

  return (
    <div className="hop">
      <h3 className="titrelistskill">
        {titre === "Softskill" ? "Softskills" : "Hardskills"}
      </h3>
      {filteredCompetences.map((hi) => (
        <ul
          className={hi.isMatch ? "lightgreen" : "white"}
          key={hi.User_idUsers}
        >
          <li className="comparer">{hi[`${titre}_Name`]}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListeSkills;
