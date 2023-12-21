import React from "react";
import logo from "../assets/images/logorayj.png";
import rf from "../assets/images/logorf.png";
import "../styles/header.css";

function Header() {
  return (
    <section className="entete">
      <img className="logo" src={rf} alt="logo entreprise" />
      <img className="logo2" src={logo} alt="logo entreprise" />
    </section>
  );
}

export default Header;
