import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../../assets/NavBar/Home.svg";
import Following from "../../../assets/NavBar/Wallet.svg";
import Profile from "../../../assets/NavBar/Profile.svg";

import "./navBarAd.css";

function NavBarAd() {
  const navigate = useNavigate();
  return (
    <div className="administration">
      <div className="home">
        <button type="button" onClick={() => navigate("/Profil1")}>
          <img src={Home} alt="home" />
          <p className="nav_head">Acceuil</p>
        </button>
      </div>

      <div className="filter">
        <button type="button" onClick={() => navigate("/post")}>
          <img src={Following} alt="filter" />
        </button>
      </div>

      <div className="profile">
        <button type="button">
          <img src={Profile} alt="profile" />
        </button>
      </div>
    </div>
  );
}

export default NavBarAd;
