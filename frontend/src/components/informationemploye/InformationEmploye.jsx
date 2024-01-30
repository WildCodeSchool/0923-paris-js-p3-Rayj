import React from "react";
import { format } from "date-fns";

import "./informationemploye.css";

function InformationEmploye({ user, onOpenModal }) {
  const handleOpenModal = () => {
    onOpenModal(user);
  };

  return (
    <div className="super_usercard">
      <button type="button" className="card_user" onClick={handleOpenModal}>
        <img
          className="candidate_photo"
          src={user?.image}
          // alt={`${user?.LastName}`}
          alt={user.Firstname}
        />
        <div className="identity">
          <p>Nom : {user?.Lastname}</p>
          <p>Prénom : {user?.Firstname}</p>
          <p>Matricule : {user?.Matricule}</p>
          <p>Profession : {user?.Profession}</p>
          <p> Ancienneté : {format(new Date(user.Seniority), "dd/MM/yyyy")} </p>
        </div>
      </button>
    </div>
  );
}
export default InformationEmploye;
