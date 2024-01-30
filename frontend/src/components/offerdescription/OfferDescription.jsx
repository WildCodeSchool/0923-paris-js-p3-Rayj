import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AnnonceContext from "../../context/AnnonceContext";
import ButtonCandidate from "../buttoncandidate/ButtonCandidate";
import "./offerdescription.css";
import Header from "../header/Header";

function OfferDescription() {
  const { offre } = useContext(AnnonceContext);
  const { offer } = useParams();
  const [filterAnnonce] = offre.filter((poste) => {
    return poste.id_Offers === parseInt(offer, 2);
  });

  return (
    <>
      <Header />
      <section className="offer">
        <h1 className="titleh1">{filterAnnonce?.Post_title}</h1>
        <div className="descriptionoffre">
          <h2 className="titleh2">Description de l'offre</h2>
          <p className="offerdescription">{filterAnnonce?.Description}</p>
          <h3 className="titleh3">Compétences</h3>
        </div>
        <ButtonCandidate offer={offre} offerId={parseInt(offer, 2)} />
      </section>
    </>
  );
}

export default OfferDescription;
