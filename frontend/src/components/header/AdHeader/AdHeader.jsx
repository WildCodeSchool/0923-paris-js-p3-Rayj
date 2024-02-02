import { React } from "react";
import rf from "../../../assets/images/logorf.png";
import logorayj from "../../../assets/images/logorayj.png";
import "./adHeader.css";
import NavBarAd from "../../navbar/navbar_ad/NavBarAd";

function AdHeader() {
  return (
    <div className="logo_header_desktop">
      <img className="logo_rf" src={rf} alt="logo entreprise" />
      <div className="nav_header_desktop">
        <NavBarAd />
      </div>
      <img className="logo_rayj" src={logorayj} alt="logo entreprise" />
    </div>
  );
}

export default AdHeader;
