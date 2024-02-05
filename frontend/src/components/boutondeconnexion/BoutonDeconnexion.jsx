import React from "react";
import "./boutondeconnexion.css";
import { Link } from "react-router-dom";

function BoutonDeconnexion() {
  return (
    <button className="boutonsedecora" type="button">
      <Link to="/" className="logout_btnra">
        <p>Se Déconnecter</p>
      </Link>
    </button>
  );
}

export default BoutonDeconnexion;
