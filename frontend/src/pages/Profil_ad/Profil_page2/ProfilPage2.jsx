import React, { useState } from "react";
import Select from "react-select";
import Header from "../../../components/header/Header";

import "./profilpage2.css";

const SecteursActivites = [
  { value: "Communication", label: "Communication" },
  { value: "Finances Publiques", label: "Finances Publiques" },
  {
    value: "Intervention technique et logistique",
    label: "Intervention technique et logistique",
  },
  { value: "Numérique", label: "Numérique" },
  { value: "Ressources Humaines", label: "Ressources Humaines" },
  { value: "Sécurité", label: "Sécurité" },
];

const Candidats = [
  { value: "Michel", label: "Michel" },
  { value: "Serge", label: "Serge" },
  {
    value: "Richard",
    label: "Richard",
  },
  { value: "Léon", label: "Léon" },
  { value: "Rida", label: "Rida" },
  { value: "Sherazade", label: "Sherazade" },
];

function ProfilPage2() {
  const [secteuractivite, setSecteuractivite] = useState([]);
  const handleSelectSecteurActivites = (selectedSecteurActivites) => {
    setSecteuractivite(selectedSecteurActivites);
  };
  const [candidat, setCandidat] = useState([]);
  const handleSelectCandidats = (selectedCandidats) => {
    setCandidat(selectedCandidats);
  };
  return (
    <section className="highpage">
      <Header />
      <section className="principalpage">
        <section className="cardchoice">
          <div>
            <h3>Domaines d'activités</h3>

            <Select
              className="choix-activite"
              options={SecteursActivites}
              value={secteuractivite}
              onChange={handleSelectSecteurActivites}
              isMulti
              placeholder="Sélectionnez votre domaine..."
            />
          </div>

          <div>
            <h3>Candidats</h3>

            <Select
              className="choix-candidat"
              options={Candidats}
              value={candidat}
              onChange={handleSelectCandidats}
              isMulti
              placeholder="Sélectionnez le candidat..."
            />
          </div>

          <button type="button" className="btnvalidate">
            Valider
          </button>
        </section>
      </section>
    </section>
  );
}

export default ProfilPage2;
