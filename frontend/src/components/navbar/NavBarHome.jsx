import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Home from "../../assets/NavBar/Home.svg";
import AnnonceContext from "../../context/AnnonceContext";

function NavBarHome() {
  const { setFilter } = useContext(AnnonceContext);
  const resetFilter = () => {
    setFilter([]);
  };

  return (
    <div className="home">
      <Link to="/homepage">
        <button type="button" onClick={resetFilter}>
          <img src={Home} alt="home" />
        </button>
      </Link>
    </div>
  );
}

export default NavBarHome;
