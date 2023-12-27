import Header from "../../components/header/Header";

import InformationEmploye from "../../components/informationemploye/InformationEmploye";
import "./profil.css";
import user4 from "../../assets/images/yaya.png";
import ButtonProfilAd from "../../components/boutonprofilad/ButtonProfilAd";

function Profil() {
  return (
    <>
      <Header />
      <div className="admin_profil">
        <img
          className="photoprofilad
        "
          src={user4}
          alt="dirigeant"
        />
        <p>Le Patron</p>
      </div>
      <ButtonProfilAd />

      <h1>Candidatures :</h1>
      <section className="bloc_card">
        <div className="row">
          <InformationEmploye />
        </div>
        <div className="row">
          <InformationEmploye />
        </div>
      </section>
    </>
  );
}

export default Profil;
