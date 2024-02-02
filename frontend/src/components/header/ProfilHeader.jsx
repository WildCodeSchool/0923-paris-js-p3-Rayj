import rara from "../../assets/images/rara.png";
import Arrow from "../../assets/images/return_arrow.svg";
import "./profilHeader.css";

function ProfilHeader() {
  return (
    <div className="profil_img_name">
      <img className="photoprofil" src={rara} alt="logo de profil" />
      <h2 className="profilname">Rachid Taha</h2>
      <div className="lesbuttons">
        <button type="button" className="button-precedent">
          <img className="flecheprec" alt="" src={Arrow} />
        </button>
        <button type="button" className="butbutprofil">
          Profil
        </button>
      </div>
    </div>
  );
}
export default ProfilHeader;
