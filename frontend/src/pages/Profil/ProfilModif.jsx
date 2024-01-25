import React, { useRef } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import "./profilmodif.css";
import profilPic from "../../assets/Profil/profil_pic.jpg";
import modifPen from "../../assets/Profil/modif_pen.svg";
import uploadIcon from "../../assets/Profil/upload_icon.svg";

const softSkillsOptions = [
  { value: "Humour", label: "Humour" },
  { value: "Autonomie", label: "Autonomie" },
  { value: "Réactivité", label: "Réactivité" },
  { value: "Adaptabilité", label: "Adaptabilité" },
  { value: "Flexibilité", label: "Flexibilité" },
];
const hardSkillsOptions = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "NodeJS", label: "NodeJS" },
  { value: "ReactJS", label: "ReactJS" },
];

function ProfilModif() {
  const redirect = useNavigate();
  const Email = useRef();
  const Password = useRef();
  const Phone = useRef();
  const Introduction = useRef();
  const Picture = useRef();

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
            Password: Password.current.value,
            Email: Email.current.value,
            Phone: Phone.current.value,
            Picture: Picture.current.value,
            Introduction: Introduction.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        console.info(user);
        redirect("/profil");
      } else {
        console.error("Mauvaise Donnée");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSelectSoftSkillChange = (e) => {
    softSkillsOptions(e.target.value);
  };
  const handleSelectHardSkillChange = (e) => {
    hardSkillsOptions(e.target.value);
  };
  return (
    <div className="pg_modify">
      <div className="img_btn">
        <img className="profilpic" src={profilPic} alt="profilpic" />
        <p className="user_name">{}</p>
        <Link to="/profil" className="btn_profil">
          Profil
        </Link>
      </div>
      <form className="form">
        <label>
          <p className="info"> Mot de passe</p>
          <input className="info_input" type="password" placeholder="*******" />
          <input
            className="info_input"
            type="password"
            ref={Password}
            id="password"
            required
            placeholder="Nouveau mot de passe"
          />
        </label>
        <label>
          <p className="info"> Adresse Mail</p>
          <input
            className="info_input"
            type="email"
            placeholder="rudy.ruru@example.fr"
          />
          <input
            className="info_input"
            type="email"
            name="email"
            id="email"
            required
            placeholder="E-mail"
            ref={Email}
          />
        </label>
        <label>
          <p className="info">Téléphone:</p>
          <input
            className="info_input"
            type="tel"
            placeholder="06-XX-XX-XX-XX"
          />
          <input
            className="info_input"
            type="tel"
            id="phone"
            required
            placeholder="Nouveau numéro"
            ref={Phone}
          />
        </label>
        <label className="img_input">
          <p className="info_img"> IMAGE.</p>
          <img className="upload_icon" src={uploadIcon} alt="uploadIcon" />
          <input
            type="file"
            id="picture"
            required
            ref={Picture}
            accept="image/*"
            hidden
          />
        </label>
      </form>
      <div className="motiv_skills_modif">
        <div className="modif_img_heading">
          <img className="modifPen" src={modifPen} alt="modifPen" />
          <h1 className="skill_modif_heading">Compétences</h1>
        </div>

        <p className="skill_block_heading"> Soft Skills</p>
        <Select
          className="skill_options"
          options={softSkillsOptions}
          // value={softSkills}
          onChange={handleSelectSoftSkillChange}
          isMulti
          placeholder="Sélectionnez vos compétences..."
        />
        <p className="skill_block_heading">Hard Skills</p>
        <Select
          className="skill_options"
          options={hardSkillsOptions}
          // value={hardSkills}
          onChange={handleSelectHardSkillChange}
          isMulti
          placeholder="Sélectionnez vos compétences..."
        />

        <h1 className="motivation_modif_heading">Motivation</h1>

        <textarea
          className="motivation_input_modif"
          rows="15"
          name="message"
          id="introduction"
          ref={Introduction}
          required
          placeholder="Expliquez vos motivation..."
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        SAUVEGARDER
      </button>
    </div>
  );
}

export default ProfilModif;
