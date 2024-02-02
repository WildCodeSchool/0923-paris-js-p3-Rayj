import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/NavBar/Profile.svg";

function NavBarProfile() {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <button type="button" onClick={() => navigate("/profil")}>
        <img src={Profile} alt="profile" />
        <p className="nav_head">Profile</p>
      </button>
    </div>
  );
}

export default NavBarProfile;
