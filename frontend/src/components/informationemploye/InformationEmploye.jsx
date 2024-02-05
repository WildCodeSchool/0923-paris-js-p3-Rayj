import React from "react";

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
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={user.Firstname}
        />
        <div className="identity">
          <p>{user?.Lastname}</p>
          <p> {user?.Firstname}</p>
        </div>
      </button>
    </div>
  );
}
export default InformationEmploye;
