import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/NavBar/Profile.svg";

function NavBarProfile() {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <button
        className="profile_nav_but"
        type="button"
        onClick={() => navigate("/profil")}
      >
        <img className="profile_img" src={Profile} alt="profile" />
      </button>
    </div>
  );
}

export default NavBarProfile;
