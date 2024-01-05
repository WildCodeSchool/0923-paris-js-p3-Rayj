import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logogouv from "../../assets/logo/logogouv.png";
import UnityTeamRAYJ from "../../assets/logo/UnityTeamRAYJ.png";
import "./inscription.css";

function inscription() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [seniority, setSeniority] = useState("");
  const [pickerdate, setPickerdate] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handlesubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const response = await fetch("api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName }),
      });
      if (response.ok) {
        console.info("Form submitted successfully");
      } else {
        console.error("Merci de remplir tous les champs du formulaire");
      }
    },
    [
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      seniority,
      pickerdate,
      introduction,
    ]
  );

  const validation = useNavigate();

  return (
    <div className="inscribody">
      <img className="logorf" src={logogouv} alt="logo de la société" />

      <form onSubmit={handlesubmit} className="form-inscription">
        <div className="inscription-box">
          <div className="all">
            <input
              className="firstname"
              type="text"
              name="firstName"
              required
              value={firstName}
              placeholder="Prénom"
              onChange={(event) => setFirstname(event.target.value)}
            />

            <input
              className="lastname"
              type="text"
              name="Lastname"
              required
              placeholder="Nom"
              onChange={(event) => setLastName(event.target.value)}
            />

            <input
              className="email"
              type="email"
              name="email"
              id="email"
              value={email}
              required
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="password"
              type="password"
              name="password"
              id="password"
              required
              value={password}
              placeholder="Mot de passe"
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              className="phonenumber"
              type="tel"
              name="phoneNumber"
              placeholder="numéro de téléphone"
              value={phoneNumber}
              onChange={(event) => setphoneNumber(event.target.value)}
            />
            <input
              className="seniority"
              type="number"
              name="matricule"
              placeholder="Votre Matricule"
              value={seniority}
              onChange={(event) => setSeniority(event.target.value)}
            />
            <label htmlFor="start" className="embauche">
              Date d'embauche:
              <input
                className="pickerdate"
                type="date"
                name="start"
                id="start"
                value={pickerdate}
                onChange={(event) => setPickerdate(event.target.value)}
              />
            </label>

            <textarea
              className="introduction"
              rows="25"
              cols="40"
              name="message"
              required
              placeholder="Expliquez vos motivation"
              value={introduction}
              onChange={(event) => setIntroduction(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            className="validation"
            type="submit"
            onClick={() => validation("/")}
          >
            Valider
          </button>
        </div>
      </form>
      <div>
        <img className="rayinscrir" src={UnityTeamRAYJ} alt="logo société" />
      </div>
    </div>
  );
}

export default inscription;

// voir authentification gerer l'auto-login v2//
