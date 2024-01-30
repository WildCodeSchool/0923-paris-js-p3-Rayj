import React from "react";
import rf from "../../assets/images/logorf.png";
import rara from "../../assets/images/rara.png";
import logorayj from "../../assets/images/logorayj.png";
import Arrow from "../../assets/images/Arrow.svg";
import "./header.css";

function Header() {
  return (
    <section className="block_header">
      <div className="logo_header">
        <img className="logo_rf" src={rf} alt="logo entreprise" />
        <img className="logo_rayj" src={logorayj} alt="logo entreprise" />
      </div>
      <div className="profil_img_name">
        <img className="photoprofil" src={rara} alt="logo de profil" />
        <h2 className="profilname">La poutre</h2>
        <div className="lesbuttons">
          <button type="button" className="button-precedent">
            <img className="flecheprec" alt="" src={Arrow} />
          </button>
          <button type="button" className="butbutprofil">
            Profil
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
