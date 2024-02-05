import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profil.css";
import Header from "../../components/header/Header";
import HeaderDesktop from "../../components/header/headerDesktop/HeaderDesktop";
import ProfilHeader from "../../components/header/ProfilHeader";
import NavBar from "../../components/navbar/NavBar";
import authContext from "../../context/AuthContext";

function Profil() {
  const { user } = useContext(authContext);
  console.info(user);
  const navigate = useNavigate();
  const [softkill, setSoftkill] = useState([]);
  const [hardkill, setHardkill] = useState([]);
  useEffect(() => {
    const kills = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/usersoft/${user.id_Users}`,
          {
            method: "Get",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const datasoft = await response.json();
          setSoftkill(datasoft);
        } else {
          console.error("Mauvaise Donnée soft");
          throw new Error("Bad data");
        }
        const upresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/userhard/${user.id_Users}`,
          {
            method: "Get",
            credentials: "include",
          }
        );
        if (upresponse.status === 200) {
          const datahard = await upresponse.json();
          setHardkill(datahard);
        } else {
          console.error("Mauvaise Donnée hard");
          throw new Error("Bad data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    kills();
  }, []);
  const isMobile = window.innerWidth <= 780;
  return (
    <div className="profil">
      {isMobile ? <Header /> : <HeaderDesktop />}
      <ProfilHeader />
      <button
        className="btn_modif"
        type="button"
        onClick={() => navigate(`/ProfilModif/${user?.id_Users}`)}
      >
        Modifier
      </button>
      <div className="modify">
        <p className="info_display_heading">{user?.Firstname}</p>
        <p className="info_display_heading">Matricule</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="Matricule"
          value={user?.Matricule}
        />
        <p className="info_display_heading">Email</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="Email"
          value={user?.Email}
        />
        <p className="info_display_heading">Phone</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="Phone"
          value={user?.Phone}
        />
        <p className="info_display_heading">Ancienneté</p>
        <input
          className="info_display_input"
          type="text"
          placeholder="Ancienneté"
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
              {softkill.map((n) => (
                <li>{n.softName}</li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2 className="heading">Hard Skills</h2>
            <ul className="check-list">
              {hardkill.map((c) => (
                <li>{c.hardName}</li>
              ))}
            </ul>
          </div>
        </section>
        <h2 className="motivation_heading">Motivation</h2>
        <textarea
          className="motivation_input"
          rows="15"
          name="message"
          required
          placeholder="Motivation"
          value={user?.Introduction}
        />
      </div>
      <section className="footer">{isMobile && <NavBar />}</section>
    </div>
  );
}

export default Profil;
