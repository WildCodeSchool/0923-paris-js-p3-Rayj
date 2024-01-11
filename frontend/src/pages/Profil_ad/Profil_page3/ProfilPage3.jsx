import React from "react";
import Header from "../../../components/header/Header";
import ContactCandidat from "../../../components/contact_candidat/ContactCandidat";
import "./profilpage3.css";

function ProfilPage3() {
  return (
    <section className="principalpageaffich">
      <div>
        <Header />
      </div>
      <div className="layoutcontactcandidat">
        <ContactCandidat />
      </div>
    </section>
  );
}

export default ProfilPage3;
