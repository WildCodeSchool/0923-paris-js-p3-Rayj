import React from "react";
import { useNavigate } from "react-router-dom";
import logogouv from "../../assets/logo/logogouv.png";
import UnityTeamRAYJ from "../../assets/logo/UnityTeamRAYJ.png";
import "./inscription.css";

function inscription() {
  const validation = useNavigate();

  return (
    <div className="inscribody">
      <img className="logorf" src={logogouv} alt="logo de la société" />

      <from className="formulaire-inscription">
        <div className="inscription-box">
          <input
            className="prenom"
            type="text"
            name="firstname"
            required
            placeholder="Prénom"
          />
          <hr className="ligne-btn-inscription" />
          <input
            className="Nom"
            type="text"
            name="Lastname"
            required
            placeholder="Nom"
          />
          <input
            className="email"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Votre adresse e-mail"
          />
          <input
            className="password"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Votre mot de passe"
          />
          <input
            className="matricule"
            type="number"
            name="matricule"
            placeholder="Votre Matricule"
          />
          <input
            className="phonenumber"
            type="tel"
            name="phoneNumber"
            placeholder="Votre numéro de téléphone"
          />

          <label htmlFor="start" className="embauche">
            Date d'embauche:
            <input className="pickerdate" type="date" name="start" id="start" />
          </label>

          <textarea
            className="introduction"
            rows="15"
            name="message"
            required
            placeholder="Expliquez vos motivation"
          />
        </div>
      </from>

      <button
        className="validation"
        type="button"
        onClick={() => validation("/profil")}
      >
        Valider
      </button>
      <div>
        <img className="rayinscrir" src={UnityTeamRAYJ} alt="logo société" />
      </div>
    </div>
  );
}

export default inscription;
