import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profil.css";
import profilPic from "../../assets/Profil/profil_pic.jpg";
import authContext from "../../context/AuthContext";
import NavBar from "../../components/navbar/NavBar";

function Profil() {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <div className="profil">
      <div className="img_btn">
        <img className="profilpic" src={profilPic} alt="profilpic" />
        <p className="user_name">{user?.Lastname}</p>
        <Link to="/profil" className="btn_profil">
          Profil
        </Link>
      </div>
      <button
        className="btn_modif"
        type="button"
        onClick={() => navigate(`/ProfilModif/${user?.id_Users}`)}
      >
        Modifier
      </button>
      <div className="modify">
        <p className="info_display_heading">{user?.Picture}</p>
        <p className="info_display_heading">{user?.Matricule}</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="2347"
          value={user?.Matricule}
        />
        <p className="info_display_heading">{user?.Email}</p>
        <input
          className="info_display_input"
          type="text"
          placeholder={user?.Email}
          value={user?.Email}
        />
        <p className="info_display_heading">Password</p>
        <p className="info_display_heading">{user?.Phone}</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="06.07.08.09.10"
          value={user?.Phone}
        />
        <p className="info_display_heading">{user?.Seniority}</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="7 ans"
          value={user?.Seniority}
        />
        <Link to="/connection" className="logout_btn">
          <p>Log out</p>
        </Link>
      </div>

      <div className="bloc_motiv">
        <section>
          <div>
            <h2 className="heading">Soft Skills</h2>
            <ul className="check-list">
              <li>Humour</li>
              <li>Autonomie</li>
              <li>Réactivité</li>
              <li>flexibilité</li>
              <li>Adaptabilité</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2 className="heading">Hard Skills</h2>
            <ul className="check-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
            </ul>
          </div>
        </section>

        <h2 className="motivation_heading">Motivation</h2>
        <textarea
          className="motivation_input"
          rows="15"
          name="message"
          required
          placeholder="Passionné par la création digitale, je suis prêt(e) à relever les défis du web avec innovation et expertise technique. Ma volonté : façonner des expériences en ligne exceptionnelles pour chaque utilisateur, une ligne de code à la fois."
          value={user?.Introduction}
        />
      </div>
      <NavBar />
    </div>
  );
}

export default Profil;
