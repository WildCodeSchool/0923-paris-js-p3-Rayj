import Header from "../../../components/header/Header";
import InformationEmploye from "../../../components/informationemploye/InformationEmploye";
import "./profilpage1.css";
// import user4 from "../../../assets/images/yaya.png";
// import ButtonProfilAd from "../../../components/boutonprofilad/ButtonProfilAd";

function ProfilPage1() {
  return (
    <>
      <Header />

      {/* <ButtonProfilAd /> */}

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

export default ProfilPage1;
