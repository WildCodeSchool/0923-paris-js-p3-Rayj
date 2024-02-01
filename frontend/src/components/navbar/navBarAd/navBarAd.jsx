import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../../assets/NavBar/Home.svg";
import Following from "../../../assets/NavBar/Wallet.svg";
import Profile from "../../../assets/NavBar/Profile.svg";

import "./navBarAd.css";

function NavBarAd() {
  const navigate = useNavigate();
  return (
    <div className="administration_private">
      <div className="home_private">
        <button
          className="navadbar_home"
          type="button"
          onClick={() => navigate("/Profil1")}
        >
          <img className="img_home" src={Home} alt="home" />
        </button>
      </div>

      <div className="filter_private">
        <button
          className="navadbar_post"
          type="button"
          onClick={() => navigate("/post")}
        >
          <img className="img_post" src={Following} alt="filter" />
        </button>
      </div>

      <div className="profile_private">
        <button className="navadbar_profil" type="button">
          <img className="img_profil" src={Profile} alt="profile" />
        </button>
      </div>
    </div>
  );
}

export default NavBarAd;
