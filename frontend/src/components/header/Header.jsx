import React from "react";
import rf from "../../assets/images/logorf.png";
import logorayj from "../../assets/images/logorayj.png";
import "./header.css";

function Header() {
  return (
    <section className="entete">
      <img className="logo" src={rf} alt="logo entreprise" />
      <img className="logo2" src={logorayj} alt="logo entreprise" />
    </section>
  );
}

export default Header;
