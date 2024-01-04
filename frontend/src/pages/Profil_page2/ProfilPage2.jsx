import React from "react";
import Header from "../../components/header/Header";
import user4 from "../../assets/images/yaya.png";
import ButtonProfilAd from "../../components/boutonprofilad/ButtonProfilAd";

function ProfilPage3() {
  return (
    <>
      <Header />
      <div className="admin_profil">
        <img
          className="photoprofilad
        "
          src={user4}
          alt="dirigeant"
        />
        <p>Le Patron</p>
      </div>
      <ButtonProfilAd />
      <section>
        <h1>Filtre à ajouter</h1>
      </section>
    </>
  );
}

export default ProfilPage3;
