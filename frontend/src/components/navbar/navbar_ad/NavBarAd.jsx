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
        <button type="button" onClick={() => navigate("/candidatespage")}>
          <img src={Home} alt="home" />
          <p className="nav_head">Accueil</p>
        </button>
      </div>

      <div className="filter">
        <button type="button" onClick={() => navigate("/annonce")}>
          <img src={Following} alt="filter" />
          <p className="nav_head">Annonce</p>
        </button>
      </div>

      <div className="profile">
        <button type="button" onClick={() => navigate("/profil")}>
          <img src={Profile} alt="profile" />
          <p className="nav_head">Profil</p>
        </button>
      </div>
    </div>
  );
}

export default NavBarAd;
