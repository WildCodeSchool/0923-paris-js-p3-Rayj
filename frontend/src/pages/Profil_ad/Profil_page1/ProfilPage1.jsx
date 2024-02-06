import React, { useState, useEffect } from "react";
import Header from "../../../components/header/Header";
import OfferGroup from "../../../components/offeradmin/OfferAdmin";
import "./profilpage1.css";
import NavBarAd from "../../../components/navbar/navbar_ad/NavBarAd";
import AdHeader from "../../../components/header/AdHeader/AdHeader";

function ProfilPage1() {
  const [candidates, setCandidates] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/candidates`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const usersData = await response.json();
          setCandidates(usersData);
        } else {
          console.error("Données non trouvées");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
      }
    };
    fetchData();
  }, []);
  const isMobile = window.innerWidth <= 780;

  return (
    <section className="affichagepageprofil1">
      {isMobile ? <Header /> : <AdHeader />}
      <section className="bloc_card">
        <div>
          <h3>Domaines d'activités</h3>
        </div>
        <div>
          <h2 className="htwopageprofil1">Candidatures :</h2>
          <select
            className="filtration"
            name="choix"
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
          >
            <option value="">Toutes les offres</option>
            <option value="Technique">Technique </option>
            <option value="Ressources Humaines">Ressource Humaine </option>
            <option value="Sécurité">Sécurité </option>
          </select>
        </div>
        <OfferGroup users={candidates} activeDomain={selectedDomain} />
      </section>
      {isMobile && <NavBarAd />}
    </section>
  );
}

export default ProfilPage1;
