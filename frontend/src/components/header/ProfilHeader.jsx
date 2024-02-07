import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Arrow from "../../assets/images/return_arrow.svg";
import "./profilHeader.css";
import authContext from "../../context/AuthContext";

function ProfilHeader() {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="profil_img_name">
      <img className="photoprofil" src={user?.Picture} alt="logo de profil" />
      <h2 className="profilname">
        {user?.Firstname}
        {user?.Lastname}
      </h2>
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
