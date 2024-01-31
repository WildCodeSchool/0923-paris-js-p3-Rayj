import React, { useContext } from "react";
import CardAnnonce from "../../components/cards/CardAnnonce";
import AnnonceContext from "../../context/AnnonceContext";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import FollowedOffers from "../../components/FollowedOffers/FollowedOffers";
import "./following.css";

function Following() {
  const { favorites } = useContext(AnnonceContext);

  return (
    <div className="following_page">
      <Header />

      <div className="Block_following">
        <section className="following_posts">
          <FollowedOffers />
        </section>

        <section className="row_following">
          <p className="header_fav">Favoris</p>
          <div className="favorite-offers">
            {favorites.map((favorite) => (
              <CardAnnonce key={favorite.id_Offers} poste={favorite} />
            ))}
          </div>
        </section>
      </div>
      <NavBar />
    </div>
  );
}

export default Following;
