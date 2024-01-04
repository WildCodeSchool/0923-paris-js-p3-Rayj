import React, { useState } from "react";
import "./contactcandidat.css";
import user1 from "../../assets/images/rara.png";
import user2 from "../../assets/images/richard.png";
import user3 from "../../assets/images/yaya.png";
import ListeSkills from "../listskills/ListeSkills";

const employes = [
  {
    image: user1,
    nom: "Dupont",
    prénom: "Jean",
    matricule: "001",
    profession: "Développeur",
    anciennete: "5 ans",
  },
  {
    image: user2,
    nom: "Martin",
    prénom: "Lucas",
    matricule: "002",
    profession: "Designer",
    anciennete: "3 ans",
  },
  {
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
    <>
      {employeList.map((employe) => (
        <section className="candidat-card" key={employe.matricule}>
          <div className="candidat-info">
            <div className="candinfo">
              <h3>CANDIDAT</h3>
              <ul>
                <li>Nom : {employe.nom}</li>
                <li>Prénom : {employe.prénom}</li>
                <li>Matricule : {employe.matricule}</li>
                <li>Profession : {employe.profession}</li>
                <li>Ancienneté : {employe.anciennete}</li>
              </ul>
            </div>
            <div>
              <img
                alt="candidat_name"
                className="candidate_photo"
                src={employe.image}
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
      ))}
    </>
  );
}

export default ContactCandidat;
