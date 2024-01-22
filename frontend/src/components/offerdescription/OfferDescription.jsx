import { useContext } from "react";
import { useParams } from "react-router-dom";
import AnnonceContext from "../../context/AnnonceContext";
import ButtonCandidate from "../buttoncandidate/ButtonCandidate";
import "./offerdescription.css";
import Header from "../header/Header";

function OfferDescription() {
  const annonce = useContext(AnnonceContext);
  const { idOffers } = useParams();
  const [filterAnnonce] = annonce.offre.filter((poste) => {
    return poste.id_Offers === parseInt(idOffers, 9);
  });
  return (
    <>
      <Header />
      <section className="offer">
        <h1 className="titleh1">{filterAnnonce?.Post_title}</h1>
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
              {/* <tbody>
                {filterAnnonce.softskills.map((skill) => (
                  <tr key={skill.softskills}>
                    <td className="skillssh">{skill}</td>
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
                {filterAnnonce.hardskills.map((skill) => (
                  <tr key={skill.softskills}>
                    <td className="skillssh">{skill}</td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
        <ButtonCandidate />
      </section>
    </>
  );
}
export default OfferDescription;
