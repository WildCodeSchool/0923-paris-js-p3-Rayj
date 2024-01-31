import "./recapopup.css";

function Recapitulatif({ titi }) {
  console.info("titi", titi);
  return (
    <section className="fenetrepopup">
      <h1>Recapitulatif</h1>
      <div>
        <h2> {titi} </h2>
        <hr />
      </div>
      <div className="windowrecap">
        <p>test</p>
      </div>
    </section>
  );
}

export default Recapitulatif;
