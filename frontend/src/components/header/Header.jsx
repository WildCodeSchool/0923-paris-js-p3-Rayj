import React from "react";
import rf from "../../assets/images/logorf.png";
import rara from "../../assets/images/rara.png";
import logorayj from "../../assets/images/logorayj.png";
import "./header.css";

function Header() {
  return (
    <section className="entete">
      <div className="jesaispas">
        <img className="logojesaispas" src={rf} alt="logo entreprise" />
        <div className="pixname">
          <img className="photoprofil" src={rara} alt="logo de profil" />
          <h2 className="profilname">La poutre</h2>
        </div>
        <img className="logo2" src={logorayj} alt="logo entreprise" />
      </div>
      <div>
        <button type="button" className="">
          prec
        </button>
        <button type="button" className="butbutprofil">
          Profil
        </button>
      </div>
    </section>
  );
}

export default Header;
