import React, { useState } from "react";

import Header from "../../../components/header/Header";
import InformationEmploye from "../../../components/informationemploye/InformationEmploye";
import "./profilpage1.css";

import user1 from "../../../assets/images/rara.png";
import user2 from "../../../assets/images/richard.png";
import user3 from "../../../assets/images/yaya.png";

function ProfilPage1() {
  const [users] = useState([
    {
      id: 1,
      image: user1,
      LastName: "Dupont",
      FirstName: "Jean",
      Matricule: "001",
      Profession: "Développeur",
      Seniority: "5 ans",
    },
    {
      id: 2,
      image: user2,
      LastName: "Martin",
      FirstName: "Lucas",
      Matricule: "002",
      Profession: "Designer",
      Seniority: "3 ans",
    },
    {
      id: 3,
      image: user3,
      LastName: "Durand",
      FirstName: "Marie",
      Matricule: "003",
      Profession: "Product Manager",
      Seniority: "6 ans",
    },
    {
      id: 4,
      image: user1,
      LastName: "Dupont",
      FirstName: "Jean",
      Matricule: "001",
      Profession: "Développeur",
      Seniority: "5 ans",
    },
    {
      id: 5,
      image: user2,
      LastName: "Martin",
      FirstName: "Lucas",
      Matricule: "002",
      Profession: "Designer",
      Seniority: "3 ans",
    },
  ]);

  return (
    <section className="affichagepageprofil1">
      <Header />
      <section className="bloc_card">
        <div>
          <h2 className="htwopageprofil1">Candidatures :</h2>
        </div>
        <div className="rowrow">
          {users.map((user) => (
            <InformationEmploye key={user.id} user={user} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default ProfilPage1;
