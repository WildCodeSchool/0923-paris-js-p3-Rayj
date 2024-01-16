import React from "react";
import { useParams } from "react-router-dom";

import "./contactcandidat.css";

import ListeSkills from "../listskills/ListeSkills";

const softSkills = ["Autonomie", "Esprit d'équipe", "Rigueur", "Communication"];
const hardSkills = ["Anglais", "HTML/CSS", "React", "JavaScript"];

function ContactCandidat({ users }) {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const filteredUsers = users.filter((u) => u.id === userId);
  const user = filteredUsers.length > 0 ? filteredUsers[0] : null;

  return (
    <section className="candidat-card">
      {user ? (
        <div className="candidat-info">
          <div className="candinfo">
            <h3>CANDIDAT</h3>
            <ul>
              <li>Nom : {user.LastName}</li>
              <li>Prénom : {user.FirstName}</li>
              <li>Matricule : {user.Matricule}</li>
              <li>Profession : {user.Profession}</li>
              <li>Ancienneté : {user.Seniority}</li>
            </ul>
          </div>
          <div>
            <img
              alt="candidat_name"
              className="candidate_photo"
              src={user.image}
            />
          </div>
        </div>
      ) : (
        <div>Candidat introuvable</div>
      )}
      <div className="twobtn">
        <button className="no_contact_btn" type="button">
          Refuser
        </button>
        <button className="contact_btn" type="button">
          Contacter
        </button>
      </div>
      <div className="listingskills">
        <ListeSkills titre="Softskills" skills={softSkills} />
        <ListeSkills titre="Hardskills" skills={hardSkills} />
      </div>
    </section>
  );
}

export default ContactCandidat;
