import React from "react";
import { useNavigate } from "react-router-dom";
import logorf from "../../assets/images/logorf.png";
import logorayj from "../../assets/images/logorayj.png";
import "./inscription.css";

function inscription() {
  const validation = useNavigate();

  return (
    <div className="inscribody">
      <img className="logorf" src={logorf} alt="logo de la société" />

      <from className="form-inscription">
        <div className="inscription-box">
          <div className="all">
            <input
              className="firstname"
              type="text"
              name="firstname"
              required
              placeholder="Prénom"
            />

            <input
              className="lastname"
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
              placeholder="E-mail"
            />
            <input
              className="password"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Mot de passe"
            />
            <input
              className="phonenumber"
              type="tel"
              name="phoneNumber"
              placeholder="numéro de téléphone"
            />
            <input
              className="seniority"
              type="number"
              name="matricule"
              placeholder="Votre Matricule"
            />
            <label htmlFor="start" className="embauche">
              Date d'embauche:
              <input
                className="pickerdate"
                type="date"
                name="start"
                id="start"
                value="date"
              />
            </label>

            <textarea
              className="introduction"
              rows="25"
              cols="40"
              name="message"
              required
              placeholder="Expliquez vos motivation"
            />
          </div>
        </div>
      </from>
      <div>
        <button
          className="validation"
          type="button"
          onClick={() => validation("/profil")}
        >
          Valider
        </button>
      </div>
      <div>
        <img className="rayinscrir" src={logorayj} alt="logo société" />
      </div>
    </div>
  );
}

export default inscription;
