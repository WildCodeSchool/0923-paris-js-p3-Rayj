import React, { useState, useEffect } from "react";

import { Modal, Box } from "@mui/material";

import Header from "../../../components/header/Header";
import InformationEmploye from "../../../components/informationemploye/InformationEmploye";
import ContactCandidat from "../../../components/contact_candidat/ContactCandidat";
import "./profilpage1.css";

function ProfilPage1() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`,

          {
            method: "GET",
          }
        );

        if (response.status === 200) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Erreur lors de la récupération des données ");
        }
      } catch (error) {
        console.error(error);
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

  return (
    <section className="affichagepageprofil1">
      <Header />
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
    </section>
  );
}

export default ProfilPage1;
