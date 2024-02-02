import { React } from "react";
import rf from "../../assets/images/logorf.png";

import logorayj from "../../assets/images/logorayj.png";

import "./header.css";

function Header() {
  return (
    <div className="logo_header">
      <img className="logo_rf" src={rf} alt="logo entreprise" />
      <img className="logo_rayj" src={logorayj} alt="logo entreprise" />
    </div>
  );
}

export default Header;
