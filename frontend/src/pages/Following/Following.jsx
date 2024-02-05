import React, { useContext } from "react";
import CardAnnonce from "../../components/cards/CardAnnonce";
import AnnonceContext from "../../context/AnnonceContext";
import Header from "../../components/header/Header";
import HeaderDesktop from "../../components/header/headerDesktop/HeaderDesktop";
import ProfilHeader from "../../components/header/ProfilHeader";
import NavBar from "../../components/navbar/NavBar";
import FollowedOffers from "../../components/FollowedOffers/FollowedOffers";
import "./following.css";

function Following() {
  const { favorites } = useContext(AnnonceContext);
  const isMobile = window.innerWidth <= 780;

  return (
    <div className="following_page">
      {isMobile ? <Header /> : <HeaderDesktop />}
      <ProfilHeader />

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
      <section className="footer">{isMobile && <NavBar />}</section>
    </div>
  );
}

export default Following;
