import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cardsannonce.css";
import ville from "../../assets/cards/ville.svg";

function CardAnnonce({ poste }) {
  const navigate = useNavigate();
  const [favori, setFavori] = useState({});
  const handleClick = (offres) => {
    setFavori((prev) => ({ ...prev, [offres]: !prev[offres] }));
  };
  return (
    <section className="overlap-group">
      <div className="card">
        <div className="placeholder" key={poste.id_Offers}>
          <img className="rangee1" src={poste?.image} alt="service" />
          <button
            type="button"
            onClick={() => handleClick(poste.offres)}
            className={favori[poste.offre] ? "fav jaune" : "icon"}
          >
            .
          </button>
          <button
            type="button"
            onClick={() => navigate(`/OfferDescription/${poste.id_Offers}`)}
            className="text"
          >
            <h1>{poste?.Post_title}</h1>
            <div className="location">
              <div className="txt">
                <img className="iconlocal" src={ville} alt="ville" />
                <p>{poste.Location}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
export default CardAnnonce;
