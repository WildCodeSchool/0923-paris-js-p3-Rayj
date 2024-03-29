import "./popup.css";

function Popup({ onClose }) {
  return (
    <section className="up_pop">
      <div className="pop_up">
        <button
          type="button"
          className="Modal_Btn_Close_M"
          onClick={onClose}
          onKeyDown={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <p className="Text_Presentation">
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
      </div>
    </section>
  );
}

export default Popup;
