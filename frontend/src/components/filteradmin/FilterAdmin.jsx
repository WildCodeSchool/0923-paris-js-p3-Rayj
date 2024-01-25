// import React, { useState, useEffect } from "react";
// import { fetchMétiers, fetchUsers } from "./api";

// function FilterAdmin() {
//   const [métiers, setMétiers] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch des métiers
//     fetchMétiers()
//       .then((métiersData) => setMétiers(métiersData))
//       .catch((error) =>
//         console.error("Erreur lors du chargement des métiers :", error)
//       );

//     // Fetch des utilisateurs (candidats)
//     fetchUsers()
//       .then((usersData) => setUsers(usersData))
//       .catch((error) =>
//         console.error("Erreur lors du chargement des utilisateurs :", error)
//       );
//   }, []);

//   return (
//     <div>
//       {/* Sélection du métier */}
//       <select onChange={(e) => setSelectedMétier(e.target.value)}>
//         <option value="">Sélectionnez un métier</option>
//         {métiers.map((métier) => (
//           <option key={métier.id} value={métier.id}>
//             {métier.nom}
//           </option>
//         ))}
//       </select>

//       {/* Sélection de l'utilisateur */}
//       <select onChange={(e) => setSelectedUser(e.target.value)}>
//         <option value="">Sélectionnez un utilisateur</option>
//         {users.map((user) => (
//           <option key={user.id} value={user.id}>
//             {user.nom}
//           </option>
//         ))}
//       </select>

//       {/* Affichage des domaines filtrés */}
//       <ul>
//         {domaines.map((domaine) => (
//           <li key={domaine.id}>{domaine.nom}</li>
//         ))}
//       </ul>

//       {/* Affichage des utilisateurs (candidats) filtrés */}
//       <ul>
//         {/* Vous pouvez afficher des informations sur les candidats filtrés ici */}
//       </ul>
//     </div>
//   );
// }

// export default FilterAdmin;
