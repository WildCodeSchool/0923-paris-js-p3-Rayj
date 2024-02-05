import React, { useState, useEffect } from "react";

import { Modal, Box } from "@mui/material";
import fetchUsers from "../../../api";

import Header from "../../../components/header/Header";
import InformationEmploye from "../../../components/informationemploye/InformationEmploye";
import ContactCandidat from "../../../components/contact_candidat/ContactCandidat";
import "./profilpage1.css";
import NavBarAd from "../../../components/navbar/navbar_ad/NavBarAd";
import AdHeader from "../../../components/header/AdHeader/AdHeader";

function ProfilPage1() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
      }
    };

    fetchData();
  }, []);

  const handleopenModal = (user) => {
    setSelectedUser(user);

    setOpenModal(true);
  };

  const handlecloseModal = () => {
    setSelectedUser(null);

    setOpenModal(false);
  };
  const isMobile = window.innerWidth <= 780;

  return (
    <section className="affichagepageprofil1">
      {isMobile ? <Header /> : <AdHeader />}
      <section className="bloc_card">
        <div>
          <h2 className="htwopageprofil1">Candidatures :</h2>
        </div>
        <div className="rowrow">
          {users.map((user) => (
            <InformationEmploye
              user={user}
              key={user.id}
              onOpenModal={handleopenModal}
            />
          ))}
        </div>
      </section>

      <Modal
        className="modalcontactcandidat"
        open={openModal}
        onClose={handlecloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {selectedUser && (
            <ContactCandidat
              user={selectedUser}
              onCloseModal={handlecloseModal}
            />
          )}
        </Box>
      </Modal>
      {isMobile && <NavBarAd />}
    </section>
  );
}

export default ProfilPage1;
