import React from "react";
import "./informationemploye.css";
import { useNavigate } from "react-router-dom";

function InformationEmploye({ user }) {
  const navigate = useNavigate();
  return (
    <div className="super_usercard">
      <button
        type="button"
        className="card_user"
        onClick={() => navigate(`/contact-candidat/${user?.id}`)}
      >
        <img
          className="candidate_photo"
          src={user?.image}
          alt={`${user?.LastName}`}
        />
        <div className="identity">
          <p>Nom : {user?.LastName}</p>
          <p>Prénom : {user?.FirstName}</p>
          <p>Matricule : {user?.Matricule}</p>
          <p>Profession : {user?.Profession}</p>
          <p>Ancienneté : {user?.Seniority}</p>
        </div>
      </button>
    </div>
  );
}
export default InformationEmploye;
