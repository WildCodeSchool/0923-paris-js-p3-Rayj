import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import rf from "../../assets/images/logorf.png";
import rara from "../../assets/images/rara.png";
import logorayj from "../../assets/images/logorayj.png";
// import Arrow from "../../assets/images/Arrow.svg";
import AuthContext from "../../context/AuthContext";
import "./header.css";

function Header() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <section className="entete">
      <div className="jesaispas">
        <img className="logojesaispas" src={rf} alt="logo entreprise" />
        <div className="pixname">
          <img className="photoprofil" src={rara} alt="logo de profil" />
          <h2 className="profilname">{user?.Lastname}</h2>
        </div>
        <img className="logo2" src={logorayj} alt="logo entreprise" />
      </div>
      <div className="lesbuttons">
        <button type="button" className="button-precedent">
          {/* <img className="flecheprec" alt="" src={Arrow} /> */}
        </button>
        <button
          type="button"
          className="butbutprofil"
          onClick={() => navigate("/Profil")}
        >
          Profil
        </button>
      </div>
    </section>
  );
}

export default Header;
