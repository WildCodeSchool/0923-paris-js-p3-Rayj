import React from "react";
import Header from "../../components/header/Header";
import user4 from "../../assets/images/yaya.png";
import ButtonProfilAd from "../../components/boutonprofilad/ButtonProfilAd";
import ContactCandidat from "../../components/contact_candidat/ContactCandidat";

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
      <ContactCandidat />
    </>
  );
}

export default ProfilPage3;
