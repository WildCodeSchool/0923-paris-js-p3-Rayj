import React from "react";
import "./contactcandidat.css";
import ListeSkills from "../listskills/ListeSkills";

function ContactCandidat({ user, onCloseModal }) {
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
              <li>Nom : {user?.Lastname}</li>
              <li>Prénom : {user?.Firstname}</li>
              <li>Matricule : {user?.Matricule}</li>
              <li>Email : {user?.Email}</li>
            </ul>
          </div>
          <div>
            <img
              alt={user.Firstname}
              className="candidate_photomodal"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              `Candidat - ${user?.Firstname} ${user?.Lastname}`
            );
            const emailBody = encodeURIComponent(
              "Votre candidature n'a pas été retenue. Nous vous invitons à continuer votre recherche d'emploi. "
            );

            const mailtoURL = `mailto:${user?.email}?subject=${emailSubject}&body=${emailBody}`;

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
              `Candidat - ${user?.Firstname} ${user?.Lastname}`
            );
            const emailBody = encodeURIComponent(
              "Votre candidature a été retenue. Je prendrai contact avec vous dans les meilleurs délais afin de fixer un entretien."
            );

            const mailtoURL = `mailto:${user?.email}?subject=${emailSubject}&body=${emailBody}`;

            window.location.href = mailtoURL;
          }}
        >
          Contacter
        </button>
      </div>
      <div className="listingskills">
        <ListeSkills titre="Softskill" user={user} />
        <ListeSkills titre="Hardskill" user={user} />
      </div>
    </section>
  );
}

export default ContactCandidat;
