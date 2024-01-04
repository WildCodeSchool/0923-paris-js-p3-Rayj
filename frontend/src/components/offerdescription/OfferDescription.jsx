import React, { useState } from "react";
import ButtonCandidate from "../boutoncandidat/ButtonCandidate";
import "./offerdescription.css";
import Header from "../header/Header";

const offers = [
  {
    titre: "Developpeur Web",
    description:
      "Nous sommes à la recherche d’un(e) développeur(euse) web talentueux(se). Vous serez responsable de la conception, du développement et de la maintenance de nos applications web, en veillant à offrir une expérience utilisateur exceptionnelle. Nous serions ravis de discuter de votre candidature.",
    softskills: ["Humour", "Autonomie", "Réactivité"],
    hardskills: ["Management", "Anglais", "CSS"],
  },
  {
    titre: "Gouteur de moules",
    description: "Nous sommes à la recherche d’un(e) bouche gobeuse ......",
    softskills: ["Gourmand", "Curieux", "Epicurien"],
    hardskills: ["Riche", "Technicien", "Couteau Suisse"],
  },
  {
    titre: "Chargé(e) de communication bilingue (fr/ang)",
    description: "Nous sommes à la recherche d’un(e) chargé(e) ......",
    softskills: ["Réactivité", "Autonomie", "Sens de l'écoute"],
    hardskills: ["Diplomatie", "Multilinguisme", "Rédaction"],
  },
];

function OfferDescription() {
  const [jobList] = useState(offers);

  return (
    <>
      <Header />
      <section className="offer">
        <h1 className="titleh1">{jobList[0].titre}</h1>

        <hr className="ligne-separation1" />

        <div className="descriptionoffre">
          <h2 className="titleh2">Description de l'offre</h2>
          <p className="offerdescription">{jobList[0].description}</p>

          <hr className="ligne-separation" />
          <h3 className="titleh3">Compétences</h3>
          <div className="shskills">
            <table className="softskillsrm">
              <thead>
                <tr>
                  <th className="competence">Softskills</th>
                </tr>
              </thead>
              <tbody>
                {jobList[0].softskills.map((skill) => (
                  <tr key={skill}>
                    <td className="skillssh">{skill.skill}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="hardskillsrm">
              <thead>
                <tr>
                  <th className="competence">Hardskills</th>
                </tr>
              </thead>
              <tbody>
                {jobList[0].hardskills.map((skill) => (
                  <tr key={skill}>
                    <td className="skillssh">{skill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ButtonCandidate />
      </section>
    </>
  );
}
export default OfferDescription;
