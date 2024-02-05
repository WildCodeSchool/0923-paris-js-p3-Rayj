import { useNavigate } from "react-router-dom";
import rara from "../../assets/images/rara.png";
import Arrow from "../../assets/images/return_arrow.svg";
import "./profilHeader.css";

function ProfilHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="profil_img_name">
      <img className="photoprofil" src={rara} alt="logo de profil" />
      <h2 className="profilname">Rachid Taha</h2>
      <div className="lesbuttons">
        <button type="button" className="button-precedent" onClick={goBack}>
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
