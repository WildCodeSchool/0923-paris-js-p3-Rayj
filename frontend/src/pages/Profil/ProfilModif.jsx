import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import "./profilmodif.css";
import authContext from "../../context/AuthContext";
import profilPic from "../../assets/Profil/profil_pic.jpg";
import modifPen from "../../assets/Profil/modif_pen.svg";
import NavBar from "../../components/navbar/NavBar";
// import Header from "../../components/header/Header";
// import HeaderDesktop from "../../components/header/headerDesktop/HeaderDesktop";
// import ProfilHeader from "../../components/header/ProfilHeader";
// import uploadIcon from "../../assets/Profil/upload_icon.svg";

function ProfilModif() {
  const { user, setUser } = useContext(authContext);
  const redirect = useNavigate();
  const [Email, setEmail] = useState(user?.Email);
  const [Phone, setPhone] = useState(user?.Phone);
  const [Introduction, setIntroduction] = useState(user?.Introduction);
  // const Picture = useRef();
  const [soft, setSoft] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [hard, setHard] = useState([]);
  const [selectedOptionn, setSelectedOptionn] = useState([]);
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            Email,
            Phone,
            Introduction,
          }),
        }
      );
      if (response.status === 200) {
        const updatedUser = await response.json();
        setUser(updatedUser);
      } else {
        console.error("Mauvaise Donnée");
      }
      const upresponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/usersoft/${user.id_Users}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            Users_idUsers: user.id_Users,
            Softskills_id_Softskills: selectedOption.map((s) => s.value),
          }),
        }
      );
      if (upresponse.status === 204) {
        const createresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/usersoft`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              Users_idUsers: user.id_Users,
              Softskills_id_Softskills: selectedOption.map((s) => s.value),
            }),
          }
        );
        if (createresponse.status === 201) {
          console.info("update soft ok");
        } else {
          console.error("Mauvaise Donnée");
        }
        const uupresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/userhard/${user.id_Users}`,
          {
            method: "DELETE",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              Users_idUsers: user.id_Users,
              Hardskills_id_Hardskills: selectedOptionn.map((s) => s.value),
            }),
          }
        );
        if (uupresponse.status === 204) {
          const createreesponse = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/userhard`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                Hardskills_id_Hardskills: selectedOptionn.map((s) => s.value),
                Users_idUsers: user.id_Users,
              }),
            }
          );
          if (createreesponse.status === 201) {
            console.info("update hard ok");
          } else {
            console.error("Mauvaise Donnée");
          }
          redirect("/profil");
        } else {
          console.error("Mauvaise Donnée");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/softskills`,
          {
            method: "Get",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const datasoft = await response.json();
          const softSkillsOptions = [];
          for (const s of datasoft) {
            softSkillsOptions.push({ value: s.id_Softskills, label: s.Name });
          }
          setSoft(softSkillsOptions);
        } else {
          console.error("Mauvaise Donnée");
        }
        const upresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/hardskills`,
          {
            method: "Get",
            credentials: "include",
          }
        );
        if (upresponse.status === 200) {
          const datahard = await upresponse.json();
          const hardSkillsOptions = [];
          for (const h of datahard) {
            hardSkillsOptions.push({ value: h.id_Hardskills, label: h.Name });
          }

          setHard(hardSkillsOptions);
        } else {
          console.error("Mauvaise Donnée");
        }
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);
  const isMobile = window.innerWidth <= 780;
  return (
    <div className="pg_modify">
      <div className="img_btn">
        <img className="profilpic" src={profilPic} alt="profilpic" />
        <p className="user_name">{user?.Lastname}</p>
        <Link to="/profil" className="btn_profil">
          Profil
        </Link>
        {/* {isMobile ? <Header /> : <HeaderDesktop />}
      <ProfilHeader /> */}
      </div>
      <form className="form-modification">
        <label>
          <p className="info"> Adresse Mail</p>
          <input
            className="info_input"
            type="email"
            name="email"
            id="email"
            required
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <p className="info">Téléphone:</p>
          <input
            className="info_input"
            type="tel"
            id="phone"
            required
            placeholder="Nouveau numéro"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        {/* <label className="img_input">
          <p className="info_img"> IMAGE.</p>
          <img className="upload_icon" src={uploadIcon} alt="uploadIcon" />
          <input
            type="file"
            id="picture"
            required
            ref={Picture}
            value={user.Picture}
            accept="image/*"
            hidden
          />
        </label> */}
      </form>
      <div className="motiv_skills_modif">
        <div className="modif_img_heading">
          <img className="modifPen" src={modifPen} alt="modifPen" />
          <h1 className="skill_modif_heading">Compétences</h1>
        </div>
        <p className="skill_block_heading"> Soft Skills</p>
        <Select
          className="skill_options"
          value={selectedOption}
          onChange={setSelectedOption}
          options={soft}
          isMulti
          placeholder=""
          filterOption={(option, input) => {
            const inputLength = input ? input.length : 0;
            const maxSelectedOptions = 4;
            const selectedOptionsLength = selectedOption.length;
            return (
              option.label.toLowerCase().includes(input.toLowerCase()) &&
              selectedOptionsLength < maxSelectedOptions - inputLength
            );
          }}
        />
        <p className="skill_block_heading">Hard Skills</p>
        <Select
          className="skill_options"
          value={selectedOptionn}
          onChange={setSelectedOptionn}
          options={hard}
          isMulti
          placeholder=""
          // filterOption={(option, input) => {
          //   const inputLength = input ? input.length : 0;
          //   const maxSelectedOptionns = 4;
          //   const selectedOptionnsLength = selectedOptionn.length;
          //   return (
          //     option.label.toLowerCase().includes(input.toLowerCase()) &&
          //     selectedOptionnsLength < maxSelectedOptionns - inputLength
          //   );
          // }}
        />
        <h1 className="motivation_modif_heading">Motivation</h1>

        <textarea
          className="motivation_input_modif"
          rows="15"
          name="message"
          id="introduction"
          required
          placeholder="Expliquez vos motivation..."
          value={Introduction}
          onChange={(e) => setIntroduction(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        SAUVEGARDER
      </button>
      {isMobile && <NavBar />}
    </div>
  );
}

export default ProfilModif;
