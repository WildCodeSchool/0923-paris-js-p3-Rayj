/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnnonceContext from "../../context/AnnonceContext";
import ButtonCandidate from "../buttoncandidate/ButtonCandidate";
import "./offerdescription.css";
import Header from "../header/Header";
import AdHeader from "../header/AdHeader/AdHeader";
import NavBarAd from "../navbar/navbar_ad/NavBarAd";
import HeaderDesktop from "../header/headerDesktop/HeaderDesktop";
import authContext from "../../context/AuthContext";
import NavBar from "../navbar/NavBar";

function OfferDescription() {
  const { offre } = useContext(AnnonceContext);
  const { offer } = useParams();
  const [filterAnnonce] = offre.filter((poste) => {
    return poste.id_Offers === parseInt(offer);
  });
  const [soft, setSoft] = useState([]);
  const [hard, setHard] = useState([]);
  const { user } = useContext(authContext);
  const isMobile = window.innerWidth <= 780;

  useEffect(() => {
    const fetchComphard = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/offerhard/${offer}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const data = await response.json();
          setHard(data);
        } else {
          console.error("hardskills manquants");
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCompsoft = async () => {
      try {
        const softresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/offersoft/${offer}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (softresponse.status === 200) {
          const data = await softresponse.json();
          setSoft(data);
        } else {
          console.error("softskills manquants");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchComphard();
    fetchCompsoft();
  }, []);

  return (
    <>
      {!isMobile ? (
        user && user.Admin ? (
          <AdHeader />
        ) : (
          <HeaderDesktop />
        )
      ) : (
        <Header />
      )}
      <section className="offer">
        <img src={filterAnnonce?.Logo} alt="logo" />

        <h1 className="titleh1">{filterAnnonce?.Post_title}</h1>
        <p className="localisation">
          {filterAnnonce?.Location} {filterAnnonce?.Date_of_publication}
        </p>
        <hr className="ligne-separation1" />
        <div className="descriptionoffre">
          <h2 className="titleh2">Description de l'offre</h2>

          <p className="offerdescription">{filterAnnonce?.Description}</p>
          <hr className="ligne-separation" />
          <h3 className="titleh3">Compétences</h3>
          <div className="shskills">
            <table className="softskillsrm">
              <thead>
                <tr>
                  <th className="competence">Softskills</th>
                </tr>
              </thead>
              {soft.map((s) => (
                <tbody>
                  <tr key={s}>
                    <td>{s.softName}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <table className="hardskillsrm">
              <thead>
                <tr>
                  <th className="competence">Hardskills</th>
                </tr>
              </thead>
              {hard.map((h) => (
                <tbody>
                  <tr key={h}>
                    <td>{h.hardName}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <ButtonCandidate offer={offre} offerId={parseInt(offer, 2)} />
      </section>
      <section className="footer">
        {" "}
        {isMobile ? user && user.Admin ? <NavBarAd /> : <NavBar /> : null}
      </section>
    </>
  );
}

export default OfferDescription;
