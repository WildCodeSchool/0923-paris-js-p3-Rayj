import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/NavBar/Home.svg";

function NavBarHome() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <button type="button" onClick={() => navigate("/homepage")}>
        <img src={Home} alt="home" />
      </button>
    </div>
  );
}

export default NavBarHome;
