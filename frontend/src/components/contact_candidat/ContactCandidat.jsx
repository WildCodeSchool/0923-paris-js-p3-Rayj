import React, { useState } from "react";
import "./contactcandidat.css";
import user1 from "../../assets/images/rara.png";
import user2 from "../../assets/images/richard.png";
import user3 from "../../assets/images/yaya.png";
import ListeSkills from "../listskills/ListeSkills";

const employes = [
  {
    id: 1,
    image: user1,
    nom: "Dupont",
    prénom: "Jean",
    matricule: "001",
    profession: "Développeur",
    anciennete: "5 ans",
  },
  {
    id: 2,
    image: user2,
    nom: "Martin",
    prénom: "Lucas",
    matricule: "002",
    profession: "Designer",
    anciennete: "3 ans",
  },
  {
    id: 3,
    image: user3,
    nom: "Durand",
    prénom: "Marie",
    matricule: "003",
    profession: "Product Manager",
    anciennete: "6 ans",
  },
];

const softSkills = ["Autonomie", "Esprit d'équipe", "Rigueur", "Communication"];
const hardSkills = ["Anglais", "HTML/CSS", "React", "JavaScript"];

function ContactCandidat() {
  const [employeList] = useState(employes);
  return (
    <section className="candidat-card">
      <div className="candidat-info">
        <div className="candinfo">
          <h3>CANDIDAT</h3>
          <ul>
            <li>Nom : {employeList[1].nom}</li>
            <li>Prénom : {employeList[1].prénom}</li>
            <li>Matricule : {employeList[1].matricule}</li>
            <li>Profession : {employeList[1].profession}</li>
            <li>Ancienneté : {employeList[1].anciennete}</li>
          </ul>
        </div>
        <div>
          <img
            alt="candidat_name"
            className="candidate_photo"
            src={employeList[1].image}
          />
        </div>
      </div>
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
