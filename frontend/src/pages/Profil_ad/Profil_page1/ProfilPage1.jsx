import React, { useState, useEffect } from "react";

import { Modal, Box } from "@mui/material";
import Header from "../../../components/header/Header";
import InformationEmploye from "../../../components/informationemploye/InformationEmploye";
import ContactCandidat from "../../../components/contact_candidat/ContactCandidat";
import "./profilpage1.css";

function ProfilPage1() {
  const [selectedUser, setSelectedUser] = useState();
  const [candidates, setCandidates] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/candidates`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const usersData = await response.json();
          setCandidates(usersData);
        } else {
          console.error("Données non trouvées");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
      }
    };

    fetchData();
  }, []);

  const filterCandidate = candidates.filter((candidat) => {
    const fullName = `${candidat.Lastname} ${candidat.Firstname}`;
    return (
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidat.Domaine.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
          <h3>Domaines d'activités</h3>
        </div>

        <div>
          <h2 className="htwopageprofil1">Candidatures :</h2>
          <input
            type="text"
            placeholder="Rechercher par nom de domaine, nom ou prénom"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="rowrow">
          {filterCandidate.map((user) => (
            <InformationEmploye
              user={user}
              key={user.id_Users}
              onOpenModal={handleopenModal}
            />
          ))}
        </div>
      </section>

      <Modal
        className="modalcontactcandidat"
        open={openModal}
        onClose={handlecloseModal}
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
