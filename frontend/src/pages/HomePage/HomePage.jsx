import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import NavBar from "../../components/navbar/NavBar";
import CardAnnonce from "../../components/cards/CardAnnonce";
import AnnonceContext from "../../context/AnnonceContext";
import "./homepage.css";
import HeaderDesktop from "../../components/header/headerDesktop/HeaderDesktop";

function HomePage() {
  const { offre, filter, setFilter } = useContext(AnnonceContext);

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
        {isMobile ? <Header /> : <HeaderDesktop />}
      </section>
      <section className="catfilter">
        <Category onFilterChange={handleFilterChange} />
      </section>
      {/* <section className="row"> */}
      <div className="annonce">
        {filterAnnonce.map((poste) => (
          <CardAnnonce key={poste.id_Offers} poste={poste} />
        ))}
      </div>
      {/* </section> */}
      <section className="footer">{isMobile && <NavBar />}</section>
    </div>
  );
}

export default HomePage;
