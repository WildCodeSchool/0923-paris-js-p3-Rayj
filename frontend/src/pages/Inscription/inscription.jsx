import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logorf from "../../assets/images/logorf.png";
import logorayj from "../../assets/images/logorayj.png";
import "./inscription.css";
import authContext from "../../context/AuthContext";

function inscription() {
  const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const phoneNumber = useRef();
  const [matricule, setMatricule] = useState("");
  const [seniority, setSeniority] = useState("");
  const [introduction, setIntroduction] = useState("");
  const insertPicture = useRef();

  const auth = useContext(authContext);

  // const handlesubmit = useCallback(
  //   async (event) => {
  //     event.preventDefault();

  const handlesubmit = async () => {
    try {
      const formInscription = new FormData();
      formInscription.append("Lastname", lastName.current.value);
      formInscription.append("Firstname", firstName.current.value);
      formInscription.append("Matricule", matricule);
      formInscription.append("Password", password.current.value);
      formInscription.append("Email", email.current.value);
      formInscription.append("Phone", phoneNumber.current.value);
      formInscription.append("Seniority", seniority);
      formInscription.append("Introduction", introduction);
      formInscription.append("Picture", insertPicture.current.files[0]);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "POST",
          credentials: "include",
          body: formInscription,
        }
      );
      if (response.ok) {
        const newUser = await response.json();
        console.info(newUser);
        auth.setUser(newUser);
        navigate("/homepage");
      } else {
        console.error("regardez votre saisie");
      }
    } catch (error) {
      console.error(error);
    }

    // status ok redirect to login or fetch login route to autologin
  };
  return (
    <div className="inscribody-ya">
      <img className="logorf" src={logorf} alt="logo de la société" />

      <form onSubmit={handlesubmit} className="form-inscription-ya">
        <div className="inscription-box-ya">
          <div className="all">
            <input
              className="firstname"
              type="text"
              name="firstName"
              required
              ref={firstName}
              placeholder="Prénom"
            />
            <input
              className="lastname"
              type="text"
              name="Lastname"
              required
              placeholder="Nom"
              ref={lastName}
            />

            <input
              className="email"
              type="email"
              name="email"
              id="email"
              required
              placeholder="E-mail"
              ref={email}
            />
            <input
              className="password"
              type="password"
              name="password"
              id="password"
              required
              ref={password}
              placeholder="Mot de passe"
            />
            <input
              className="phonenumber"
              type="tel"
              name="phoneNumber"
              placeholder="Numéro de téléphone"
              ref={phoneNumber}
            />
            <input
              className="matricule"
              type="number"
              name="matricule"
              placeholder="Votre Matricule"
              value={matricule}
              onChange={(event) => setMatricule(event.target.value)}
            />
            <label htmlFor="start" className="embauche">
              Date d'embauche:
              <input
                className="pickerdate"
                type="date"
                name="start"
                id="start"
                value={seniority}
                onChange={(event) => setSeniority(event.target.value)}
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

            <div className="fileUpload">
              <label htmlFor="avatar">Photo de profil</label>
              <input
                className="upload"
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                ref={insertPicture}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="validation-inscription"
            type="button"
            onClick={handlesubmit}
          >
            Valider
          </button>
        </div>
      </form>
      <div>
        <img className="rayinscrir" src={logorayj} alt="logo société" />
      </div>
    </div>
  );
}

export default inscription;
