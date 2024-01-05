import React from "react";
import "./informationemploye.css";
import user1 from "../../assets/images/rara.png";
import user2 from "../../assets/images/richard.png";
import user3 from "../../assets/images/yaya.png";
import logomap from "../../assets/images/logo_map.jpg";

const employes = [
  {
    image: user1,
    nom: "Dupont",
    prénom: "Jean",
    matricule: "001",
    profession: "Développeur",
    anciennete: "5 ans",
    ville: "Paris",
    codePostal: "75",
  },
  {
    image: user2,
    nom: "Martin",
    prénom: "Lucas",
    matricule: "002",
    profession: "Designer",
    anciennete: "3 ans",
    ville: "Lyon",
    codePostal: "69",
  },
  {
    image: user3,
    nom: "Durand",
    prénom: "Marie",
    matricule: "003",
    profession: "Product Manager",
    anciennete: "6 ans",
    ville: "Toulouse",
    codePostal: "31",
  },
  {
    image: user1,
    nom: "Moreau",
    prénom: "Thomas",
    matricule: "004",
    profession: "Manager",
    anciennete: "4 ans",
    ville: "Paris",
    codePostal: "75",
  },
];

function InformationEmploye() {
  return (
    <>
      {employes.map((employe) => (
        <div className="super_usercard">
          <div className="card_user" key={employe.matricule}>
            <img
              className="candidate_photo"
              src={employe.image}
              alt={`${employe.nom}`}
            />
            <div className="identity">
              <p>Nom : {employe.nom}</p>
              <p>Prénom : {employe.prénom}</p>
              <p>Matricule : {employe.matricule}</p>
              <p>Profession : {employe.profession}</p>
              <p>Ancienneté : {employe.anciennete}</p>
            </div>
          </div>
          <div className="identity_location">
            <img className="logo_map" src={logomap} alt="logo" />
            <div>
              <p>
                Ville : {employe.ville} ({employe.codePostal})
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default InformationEmploye;
