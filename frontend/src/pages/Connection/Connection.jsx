import React from "react";
import "./connection.css";
import logogouv from "../../assets/logo/logogouv.png";
import UnityTeamRAYJ from "../../assets/logo/UnityTeamRAYJ.png";

function Connection() {
  return (
    <div className="connection">
      <img className="logo" src={logogouv} alt="logo de la société" />

      <div className="login-box">
        <div className="user-box">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Votre adresse e-mail"
          />
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Votre mot de passe"
          />
        </div>
        <div>
          <button className="btn-connection" type="button">
            Connexion
          </button>
          <hr className="ligne-btn-connection" />
        </div>
      </div>

      <div className="inscription-box">
        <h2 className="creationcompte">Pas encore De Compte ?</h2>
        <button className="inscrire" type="submit">
          <p>
            <u>Je souhaite m'inscrire</u>
          </p>
        </button>
      </div>

      <img className="ray" src={UnityTeamRAYJ} alt="logo société" />
    </div>
  );
}

export default Connection;
