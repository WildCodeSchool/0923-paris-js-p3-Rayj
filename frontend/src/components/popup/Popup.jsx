import "./popup.css";

// function Popup() {
//   return (
//     <section className="up_pop">
//       <div className="pop_up">
//         <p>
//           Chez RAYJ, nous sommes à la révolution des reconversions internes au
//           sein des entreprises. Notre plateforme innovante est une solution
//           offrant une expérience fluide et efficace tant pour les employés que
//           pour la direction. En accord avec notre engagement envers le
//           développement interne, nous accordons une priorité absolue aux offres
//           d’emploi pour les salariés en interne avant de les proposer aux
//           candidats externes. Avec notre interface conviviale, les employés
//           peuvent explorer de nouvelles opportunités au sein de l’entreprise,
//           identifier des postes adaptés et initier le processus de transition en
//           toute simplicité.
//         </p>
//         <p>WELCOME TO RAYJ !</p>
//       </div>
//     </section>
//   );
// }

// export default Popup;

import React, { useEffect, useState } from "react";

function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Ajouter un gestionnaire d'événements pour fermer la fenêtre pop-up sur un clic sur la croix
    const handleCrossClick = () => {
      setShowPopup(false);
    };

    // Attacher le gestionnaire d'événements à l'élément de la croix (ajuster l'élément en fonction de votre structure)
    const crossElement = document.getElementById("crossElementId"); // Remplacer 'crossElementId' par l'ID réel de votre élément de croix
    crossElement.addEventListener("click", handleCrossClick);

    // Nettoyer le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      crossElement.removeEventListener("click", handleCrossClick);
    };
  }, []); // Le tableau vide [] signifie que cela ne dépend d'aucune variable et s'exécute une fois après le montage initial

  // ...

  return (
    <div className={showPopup ? "popup-container" : "popup-hidden"}>
      {/* Contenu de la fenêtre pop-up */}
      <p>
        Chez RAYJ, nous sommes à la révolution des reconversions internes au
        sein des entreprises. Notre plateforme innovante est une solution
        offrant une expérience fluide et efficace tant pour les employés que
        pour la direction. En accord avec notre engagement envers le
        développement interne, nous accordons une priorité absolue aux offres
        d’emploi pour les salariés en interne avant de les proposer aux
        candidats externes. Avec notre interface conviviale, les employés
        peuvent explorer de nouvelles opportunités au sein de l’entreprise,
        identifier des postes adaptés et initier le processus de transition en
        toute simplicité.
      </p>
      <p>WELCOME TO RAYJ !</p>
      {/* Croix pour fermer la fenêtre pop-up */}
      <div id="crossElementId" className="cross-element">
        &#10006;
      </div>
    </div>
  );
}

export default Popup;
