import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Header from "../../../components/header/Header";
// import NavBarAd from "../../../components/navbar/navbar_ad/NavBar_Ad";

// import Candidates from "../../../data_sample/data_candidate.json";

import fetchUsers from "../../../api";

import "./profilpage2.css";

const SecteursActivites = [
  { value: "Communication", label: "Communication" },
  { value: "Finances Publiques", label: "Finances Publiques" },
  {
    value: "Intervention technique et logistique",
    label: "Intervention technique et logistique",
  },
  { value: "Numérique", label: "Numérique" },
  { value: "Ressources Humaines", label: "Ressources Humaines" },
  { value: "Sécurité", label: "Sécurité" },
];

function ProfilPage2() {
  const [secteuractivite, setSecteuractivite] = useState([]);
  const [candidat, setCandidat] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  const handleSelectSecteurActivites = (selectedSecteurActivites) => {
    setSecteuractivite(selectedSecteurActivites);
  };

  const handleSelectCandidats = (selectedCandidats) => {
    setCandidat(selectedCandidats);
  };

  const handleValidation = () => {
    const selectedData = {
      candidat,
    };
    navigate(`/profil1/${encodeURIComponent(JSON.stringify(selectedData))}`);
  };

  return (
    <section className="highpage">
      <Header />
      <section className="principalpage">
        <section className="cardchoice">
          <div>
            <h3>Domaines d'activités</h3>
            <Select
              className="choix-activite"
              options={SecteursActivites}
              value={secteuractivite}
              onChange={handleSelectSecteurActivites}
              isMulti
              placeholder="Sélectionnez votre domaine..."
            />
          </div>

          <div>
            <h3>Candidats</h3>
            <Select
              className="choix-candidat"
              options={users.map((user) => ({
                value: user.id,
                label: user.Firstname,
              }))}
              value={candidat}
              onChange={handleSelectCandidats}
              isMulti
              placeholder="Sélectionnez le candidat..."
            />
          </div>

          <button
            type="button"
            className="btnvalidate"
            onClick={handleValidation}
          >
            Valider
          </button>
        </section>
      </section>
      {/* <NavBarAd /> */}
    </section>
  );
}

export default ProfilPage2;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Select from "react-select";
// import { Modal, Box } from "@mui/material";

// import Header from "../../../components/header/Header";
// import ContactCandidat from "../../../components/contact_candidat/ContactCandidat";
// import NavBarAd from "../../../components/navbar/navbar_ad/NavBar_Ad";
// import fetchUsers from "../../../api";
// import "./profilpage2.css";

// const SecteursActivites = [
//   { value: "Communication", label: "Communication" },
//   { value: "Finances Publiques", label: "Finances Publiques" },
//   {
//     value: "Intervention technique et logistique",
//     label: "Intervention technique et logistique",
//   },
//   { value: "Numérique", label: "Numérique" },
//   { value: "Ressources Humaines", label: "Ressources Humaines" },
//   { value: "Sécurité", label: "Sécurité" },
// ];

// function ProfilPage2() {
//   const [secteuractivite, setSecteuractivite] = useState([]);
//   const [candidat, setCandidat] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usersData = await fetchUsers();
//         setUsers(usersData);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des utilisateurs", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSelectSecteurActivites = (selectedSecteurActivites) => {
//     setSecteuractivite(selectedSecteurActivites);
//   };

//   const handleSelectCandidats = (selectedCandidats) => {
//     setCandidat(selectedCandidats);
//   };

//   const handleValidation = () => {
//     const selectedData = {
//       candidat,
//     };
//     navigate(`/profil1/${encodeURIComponent(JSON.stringify(selectedData))}`);
//   };

//   const handleOpenModal = (userId) => {
//     const selectedUserData = users.find((user) => user.id === userId);
//     setSelectedUser(selectedUserData);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   return (
//     <section className="highpage">
//       <Header />
//       <section className="principalpage">
//         <section className="cardchoice">
//           <div>
//             <h3>Domaines d'activités</h3>
//             <Select
//               className="choix-activite"
//               options={SecteursActivites}
//               value={secteuractivite}
//               onChange={handleSelectSecteurActivites}
//               isMulti
//               placeholder="Sélectionnez votre domaine..."
//             />
//           </div>

//           <div>
//             <h3>Candidats</h3>
//             <Select
//               className="choix-candidat"
//               options={users.map((user) => ({
//                 value: user.id,
//                 label: user.Firstname,
//               }))}
//               value={candidat}
//               onChange={handleSelectCandidats}
//               isMulti
//               placeholder="Sélectionnez le candidat..."
//             />
//           </div>

//           <button
//             type="button"
//             className="btnvalidate"
//             onClick={handleValidation}
//           >
//             Valider
//           </button>
//         </section>
//       </section>
//       <NavBarAd />

//       <Modal
//         className="modalcontactcandidat"
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box>
//           {selectedUser && (
//             <ContactCandidat
//               user={selectedUser}
//               onCloseModal={handleCloseModal}
//             />
//           )}
//         </Box>
//       </Modal>
//     </section>
//   );
// }

// export default ProfilPage2;
