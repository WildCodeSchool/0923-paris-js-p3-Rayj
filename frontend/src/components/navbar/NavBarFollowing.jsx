import React from "react";
import { useNavigate } from "react-router-dom";
import Following from "../../assets/NavBar/Wallet.svg";

function NavBarFollowing() {
  const navigate = useNavigate();
  return (
    <div className="following">
      <button type="button" onClick={() => navigate("/following")}>
        <img src={Following} alt="following" />
        <p className="nav_head">Suivi</p>
      </button>
    </div>
  );
}

export default NavBarFollowing;
