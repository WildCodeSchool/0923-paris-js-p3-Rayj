import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../context/AuthContext";
import "./connection.css";
import logorf from "../../assets/images/logorf.png";
import logorayj from "../../assets/images/logorayj.png";
import Popup from "../../components/popup/Popup";

function Connection() {
  const [popupVisible, setPopupVisible] = useState(true);

  const closePopup = () => {
    setPopupVisible(false);
  };

  const navigate = useNavigate();
  const Email = useRef();
  const Password = useRef();
  const auth = useContext(authContext);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            Email: Email.current.value,
            Password: Password.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        auth.setUser(user);

        if (user.Admin === 1) navigate("/profil1");
        else navigate("/homepage");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="connectionya">
      {popupVisible && <Popup onClose={closePopup} />}

      <img className="logo" src={logorf} alt="logo de la société" />
      <div className="login-boxya">
        <div className="user-boxya">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Votre adresse e-mail"
            ref={Email}
          />
        </div>
        <div className="user-boxya">
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Votre mot de passe"
            ref={Password}
          />
        </div>
        <div>
          <button
            className="btn-connection-ya"
            type="button"
            onClick={handleSubmit}
          >
            Connexion
          </button>
          <hr className="ligne-btn-connectionya" />
        </div>
      </div>

      <div className="inscription-boxya">
        <h2 className="creationcompteya">Pas encore De Compte ?</h2>
        <div>
          <button
            className="inscrireya"
            type="button"
            onClick={() => navigate("/inscription")}
          >
            Je souhaite m'inscrire
          </button>
          <hr className="ligne-inscriptionya" />
        </div>
      </div>

      <img className="ray" src={logorayj} alt="logo société" />
    </div>
  );
}

export default Connection;
