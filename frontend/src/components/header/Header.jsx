import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import rf from "../../assets/images/logorf.png";
import rara from "../../assets/images/rara.png";
import logorayj from "../../assets/images/logorayj.png";
import AuthContext from "../../context/AuthContext";
import "./header.css";

function Header() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
