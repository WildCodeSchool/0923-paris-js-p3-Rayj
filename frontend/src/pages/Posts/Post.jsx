import React from "react";
import Header from "../../components/header/Header";
import "./post.css";

function Post() {
  return (
    <>
      <Header />

      <div className="offersannonces">
        <fieldset className="domaine">
          <legend className="legenddomaine">Domaine</legend>
          <label htmlFor="domaine">
            <select name="domaine" id="domaine">
              <option value="">Indiquez le domaine de l'annonce</option>
              <option value="rh">Ressources humaines</option>
              <option value="technique">Techniques</option>
              <option value="sécurité">Sécurité</option>
            </select>
          </label>
        </fieldset>

        <fieldset className="jobs">
          <legend className="offersmetier">Métiers</legend>
          <label htmlFor="metier">
            <select className="choicejobs" name="metier" id="metier">
              <option value="">Metiers correspondant au domaine</option>
              <option value="Développeur">Développeur</option>
              <option value="Data">Data analist</option>
              <option value="sécurité">Agent SIAAP</option>
              <option value="ressources humaines">
                Chargé(e) de communication
              </option>
              <option value="ressource humaines">
                Responsable developpement commercial
              </option>
            </select>
          </label>
        </fieldset>

        <fieldset className="city">
          <legend>Localisation</legend>
          <label htmlFor="ville">
            <select name="ville" id="ville">
              <option value="">Indiquez la ville ou ce situe l'offre</option>
              <option value="Paris">Paris</option>
              <option value="Val de Marne">Val de Marne</option>
              <option value="Toulouse">Toulouse</option>
              <option value="Nantes">Nante</option>
              <option value="Lille">Lille</option>
            </select>
          </label>
        </fieldset>

        <label htmlFor="descriptionoffers">
          {" "}
          Annonce{" "}
          <textarea
            className="offersdescription"
            rows="15"
            cols="25"
            name="message"
            required
            placeholder="Détaillé l'annonce"
          />
        </label>
      </div>
    </>
  );
}

export default Post;
