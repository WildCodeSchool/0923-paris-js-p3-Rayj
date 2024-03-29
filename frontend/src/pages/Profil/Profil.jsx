/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profil.css";
import Header from "../../components/header/Header";
import AdHeader from "../../components/header/AdHeader/AdHeader";
import HeaderDesktop from "../../components/header/headerDesktop/HeaderDesktop";
import ProfilHeader from "../../components/header/ProfilHeader";
import NavBar from "../../components/navbar/NavBar";
import NavBarAd from "../../components/navbar/navbar_ad/NavBarAd";
import authContext from "../../context/AuthContext";

function Profil() {
  const { user } = useContext(authContext);
  const [softkill, setSoftkill] = useState([]);
  const [hardkill, setHardkill] = useState([]);
  useEffect(() => {
    const kills = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/usersoft/${user.id_Users}`,
          {
            method: "GET",
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
            method: "GET",
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
  }, [user]);
  const isMobile = window.innerWidth <= 780;

  return (
    <div className="profil">
      {!isMobile ? (
        user && user.Admin ? (
          <AdHeader />
        ) : (
          <HeaderDesktop />
        )
      ) : (
        <Header />
      )}
      <ProfilHeader />
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
        <Link to="/" className="logout_btn">
          <p>Déconnection</p>
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

      <section className="footer">
        {isMobile ? user && user.Admin ? <NavBarAd /> : <NavBar /> : null}
      </section>
    </div>
  );
}

export default Profil;
