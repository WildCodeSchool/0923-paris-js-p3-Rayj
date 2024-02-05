import React from "react";

import { format } from "date-fns";

import "./contactcandidat.css";

import ListeSkills from "../listskills/ListeSkills";

function ContactCandidat({ user, onCloseModal }) {
  // const softSkills = user.id_SoftSkills?.Name || [];

  // const hardSkills = [];
  return (
    <section className="candidat-card">
      {user ? (
        <div className="candidat-info">
          <div className="candinfo">
            <h3>CANDIDAT</h3>
            <button
              type="button"
              className="close-iconcontactcandidat"
              onClick={onCloseModal}
            >
              &#x2715;
            </button>
            <ul>
              <li>Nom : {user.Lastname}</li>
              <li>Prénom : {user.Firstname}</li>
              <li>Matricule : {user.Matricule}</li>
              <li>Profession : {user.Profession}</li>
              <li>
                Ancienneté : {format(new Date(user.Seniority), "dd/MM/yyyy")}{" "}
              </li>
            </ul>
          </div>
          <div>
            <img
              alt={user.Firstname}
              className="candidate_photo"
              src={user.Picture}
            />
          </div>
        </div>
      ) : (
        <div>Candidat introuvable</div>
      )}
      <div className="twobtn">
        <button
          className="no_contact_btn"
          type="button"
          onClick={() => {
            const emailSubject = encodeURIComponent(
              `Candidat - ${user.Firstname} ${user.Lastname}`
            );
            const emailBody = encodeURIComponent(
              "Votre candidature n'a pas été retenue. Nous vous invitons à continuer votre recherche d'emploi. "
            );

            const mailtoURL = `mailto:${user.email}?subject=${emailSubject}&body=${emailBody}`;

            window.location.href = mailtoURL;
          }}
        >
          Refuser
        </button>
        <button
          className="contact_btn"
          type="button"
          onClick={() => {
            const emailSubject = encodeURIComponent(
              `Candidat - ${user.Firstname} ${user.Lastname}`
            );
            const emailBody = encodeURIComponent(
              "Votre candidature a été retenue. Je prendrai contact avec vous dans les meilleurs délais afin de fixer un entretien."
            );

            const mailtoURL = `mailto:${user.email}?subject=${emailSubject}&body=${emailBody}`;

            window.location.href = mailtoURL;
          }}
        >
          Contacter
        </button>
      </div>
      <div className="listingskills">
        <ListeSkills
          titre="Softskills :"
          // skills={softSkills}
          name="Empathie"
          name2="Réactivité"
          name3="Prise d'initiative"
        />
        <ListeSkills
          titre="Hardskills :"
          // skills={hardSkills}
          nameH="HTML 5"
          nameH1="CSS 3"
          nameH2="Anglais"
        />
      </div>
    </section>
  );
}

export default ContactCandidat;
