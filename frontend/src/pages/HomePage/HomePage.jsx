/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import NavBar from "../../components/navbar/NavBar";
import CardAnnonce from "../../components/cards/CardAnnonce";
import AnnonceContext from "../../context/AnnonceContext";
import "./homepage.css";
import HeaderDesktop from "../../components/header/headerDesktop/HeaderDesktop";
import authContext from "../../context/AuthContext";
import AdHeader from "../../components/header/AdHeader/AdHeader";
import NavBarAd from "../../components/navbar/navbar_ad/NavBarAd";

function HomePage() {
  const { offre, filter, setFilter } = useContext(AnnonceContext);
  const { user } = useContext(authContext);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filterAnnonce = offre.filter((poste) => {
    return filter.length === 0 || filter.includes(poste.Domaine);
  });

  const isMobile = window.innerWidth <= 780;

  return (
    <div className="homepage">
      <section className="entete">
        {!isMobile ? (
          user && user.Admin ? (
            <AdHeader />
          ) : (
            <HeaderDesktop />
          )
        ) : (
          <Header />
        )}
      </section>
      <section className="catfilter">
        <Category onFilterChange={handleFilterChange} />
      </section>
      <section className="row">
        <div className="annonce">
          {filterAnnonce.map((poste) => (
            <CardAnnonce key={poste.id_Offers} poste={poste} />
          ))}
        </div>
      </section>
      <section className="footer">
        {isMobile ? user && user.Admin ? <NavBarAd /> : <NavBar /> : null}
      </section>
    </div>
  );
}

export default HomePage;
