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
          src={user?.Picture}
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
