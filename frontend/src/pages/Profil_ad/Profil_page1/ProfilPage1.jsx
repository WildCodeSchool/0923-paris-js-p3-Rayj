import Header from "../../../components/header/Header";
import InformationEmploye from "../../../components/informationemploye/InformationEmploye";
import "./profilpage1.css";

function ProfilPage1() {
  return (
    <section className="affichagepageprofil1">
      <Header />

      <section className="bloc_card">
        <div>
          <h2 className="htwopageprofil1">Candidatures :</h2>
        </div>
        <div className="rowrow">
          <InformationEmploye />
        </div>
        <div className="rowrow">
          <InformationEmploye />
        </div>
      </section>
    </section>
  );
}

export default ProfilPage1;
