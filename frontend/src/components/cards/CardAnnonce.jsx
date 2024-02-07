/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AnnonceContext from "../../context/AnnonceContext";
import "./cardsannonce.css";
import ville from "../../assets/cards/ville.svg";

function CardAnnonce({ poste, isCandidate = false }) {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useContext(AnnonceContext);

  const handleRemoveFavorite = async (offer) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/favorites/${offer.id_Offers}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.status === 204) {
        const favs = favorites.filter(
          (fav) => fav.id_Offers !== poste.id_Offers
        );
        setFavorites(favs);
        console.info("ok");
      } else {
        const errorResponse = await response.json();
        console.error(
          "Failed to remove favorite:",
          response.status,
          errorResponse
        );
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  const handleClick = async (offer) => {
    if (favorites.find((fav) => fav.id_Offers === poste.id_Offers)) {
      handleRemoveFavorite(offer);
    } else {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/favorites`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              Offers_Id_offers: offer.id_Offers,
            }),
          }
        );

        if (response.status === 201) {
          offer.offerID = poste.id_Offers;
          setFavorites((prev) => [...prev, offer]);
        } else {
          const errorResponse = await response.json();
          console.error(
            "Failed to add favorite:",
            response.status,
            errorResponse
          );
        }
      } catch (error) {
        console.error("Error adding favorite:", error);
      }
    }
  };
  return (
    <section className="overlap-group">
      <div className="card">
        <div className="placeholder" key={poste.offer}>
          <img className="rangee1" src={poste?.Logo} alt="service" />
          <button
            type="button"
            onClick={() => {
              !isCandidate ? handleClick(poste) : null;
            }}
            className={
              favorites.find((fav) => fav.offerID === poste.id_Offers)
                ? "fav jaune"
                : "icon"
            }
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
