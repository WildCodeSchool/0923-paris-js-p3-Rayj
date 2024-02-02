import { React } from "react";
import rf from "../../../assets/images/logorf.png";
import logorayj from "../../../assets/images/logorayj.png";
import "./headerDesktop.css";
import NavBarHome from "../../navbar/NavBarHome";
import NavBarSearch from "../../navbar/NavBarSearch";
import NavBarProfile from "../../navbar/NavBarProfile";
import NavBarFollowing from "../../navbar/NavBarFollowing";

function HeaderDesktop() {
  return (
    <div className="logo_header_desktop">
      <img className="logo_rf" src={rf} alt="logo entreprise" />
      <div className="nav_header_desktop">
        <NavBarHome />
        <NavBarSearch />
        <NavBarFollowing />
        <NavBarProfile />
      </div>
      <img className="logo_rayj" src={logorayj} alt="logo entreprise" />
    </div>
  );
}

export default HeaderDesktop;
