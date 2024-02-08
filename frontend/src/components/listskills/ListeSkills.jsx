import React, { useState, useEffect } from "react";
import "./listeskills.css";

function ListeSkills({ titre, user }) {
  const [softskill, setSoftkill] = useState([]);
  const [hardskill, setHardkill] = useState([]);
  useEffect(() => {
    const kills = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/usersoft/${user.Id_Users}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const datasoft = await response.json();
          setSoftkill(datasoft);
        } else {
          console.error("Mauvaise Donnée soft");
          throw new Error("Bad data");
        }
        const upresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/userhard/${user.Id_Users}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (upresponse.status === 200) {
          const datahard = await upresponse.json();
          setHardkill(datahard);
        } else {
          console.error("Mauvaise Donnée hard");
          throw new Error("Bad data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    kills();
  }, []);
  return (
    <div className="hop">
      <h3 className="titrelistskill">
        {titre === "Softskill" ? "Softskills" : "Hardskills"}
      </h3>
      <ul className="white">
        {titre === "Softskill"
          ? softskill.map((s) => <li key={s.Users_idUsers}>{s.softName}</li>)
          : hardskill.map((h) => <li>{h.hardName}</li>)}
      </ul>
    </div>
  );
}
export default ListeSkills;
