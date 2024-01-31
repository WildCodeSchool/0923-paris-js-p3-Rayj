import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profil.css";
import profilPic from "../../assets/Profil/profil_pic.jpg";
import authContext from "../../context/AuthContext";
import NavBar from "../../components/navbar/NavBar";

function Profil() {
  const { user } = useContext(authContext);
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
        {/* <p className="info_display_heading">Password</p> */}
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
      <NavBar />
    </div>
  );
}

export default Profil;
