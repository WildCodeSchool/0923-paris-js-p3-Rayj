/* eslint-disable no-unneeded-ternary */
import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { RadioGroup, Radio } from "react-radio-group";
// import { Modal } from "react-responsive-modal";
import Header from "../../components/header/Header";
// import RecaPopup from "../../components/popup/recapopup";
import "./post.css";

const Domaine = [
  { value: "Securite", label: "Securite" },
  { value: "Technique", label: "Technique" },
  { value: "Ressources Humaines", label: "Ressources Humaines" },
];

const City = [
  { value: "Paris", label: "Paris" },
  { value: "Lille", label: "Lille" },
  { value: "Bordeaux", label: "Bordeaux" },
  { value: "Nantes", label: "Nantes" },
  { value: "Toulouse", label: "Toulouse" },

];

const formatSelectData = (data, table) => {
  const arr = [];
  for (const d of data) {
    arr.push({ value: d[`id_${table}`], label: d.Name });
  }
  return arr;
};

function Post() {
  // modal //
  // const [recap, setRecap] = useState(false);
  // const onOpenModalRecap = () => setRecap(true);
  // const onCloseRecap = () => setRecap(false);

  const navigate = useNavigate();

  //   const Training = useRef();
  const [training, setTraining] = useState("");

  //   const Level = useRef();
  const [level, setLevel] = useState("");
  //   const selectDomaine = useRef();
  const [selectDomaine, setSelectDomaine] = useState();
  const [selectCity, setSelectCity] = useState();
  const [softSkills, setSoftSkills] = useState([]);
  const [hardSkills, setHardSkills] = useState([]);
  const [categories, setCategories] = useState("");

  // const structureData = (tab) => {
  //   const newTab = [];
  //   for (let i = 0; i < tab.length; i += 1) {
  //     const name = tab[i].Name;
  //     if (tab[i]?.id_Hardskills) {
  //       newTab.push({
  //         id_Hardskills: tab[i].id_Hardskills,
  //         value: name,
  //         label: name,
  //       });
  //     } else if (tab[i]?.id_Softskills) {
  //       newTab.push({
  //         id_Softskills: tab[i].id_Softskills,
  //         value: name,
  //         label: name,
  //       });
  //     } else {
  //       newTab.push({
  //         id_Categories: tab[i].id_Categories,
  //         value: name,
  //         label: name,
  //       });
  //     }
  //   }
  //   return newTab;
  // };

  // get //
  useEffect(() => {
    const gethardSkills = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/hardskills`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setHardSkills(formatSelectData(data, "Hardskills"));
        } else {
          console.error("Champs non trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    gethardSkills();
  }, []);

  useEffect(() => {
    const getsoftSkills = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/softskills`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          // const arr = [];
          // for (const d of data) {
          //   arr.push({ value: d.id_Softskills, label: d.Name });
          // }
          setSoftSkills(formatSelectData(data, "Softskills"));
        } else {
          console.error("Champs non trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getsoftSkills();
  }, []);

  useEffect(() => {
    const getCategorie = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/categories`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(formatSelectData(data, "Categories"));
        } else {
          console.error("Champs non trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCategorie();
  }, []);

  // post//
  const [titlePost, setTitlePost] = useState("");
  const [descriptionoffre, setDescriptionoffre] = useState("");
  const [insertLogo, setInsertLogo] = useState("");

  const [selectSoftSkills, setSelectSoftSkills] = useState([]);
  const [selectHardSkills, setSelectHardSkills] = useState([]);
  const [selectCategorie, setSelectCategorie] = useState("");
  const handleoffre = async () => {
    try {
      const form = new FormData();
      form.append("tabSoftSkills", JSON.stringify(selectSoftSkills));
      form.append("tabHardSkills", JSON.stringify(selectHardSkills));
      form.append("Training", training === "true" ? 1 : 0);
      form.append("Level", level);
      form.append("Domaine", selectDomaine?.value);
      form.append("Location", selectCity?.value);
      form.append("Categorie", selectCategorie.value);
      form.append("Description", descriptionoffre);
      form.append("Post_title", titlePost);
      form.append("Logo", insertLogo);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/offers`,
        {
          method: "POST",
          credentials: "include",
          body: form,
        }
      );
      if (response.ok) {
        console.info("Form submitted successfully");
        navigate("/ProfilPage1");
        // const data = await response.json(); navigate
        // console.log(data)
      } else {
        console.error("Merci de remplir tous les champs du formulaire");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectHardSkillChange = (selectedHardSkillOptions) => {
    setSelectHardSkills(selectedHardSkillOptions);
  };

  const handleSelectCategorie = (value) => {
    setSelectCategorie(value);
  };

  const handleSelectSoftSkillChange = (selectedSoftSkillOptions) => {
    setSelectSoftSkills(selectedSoftSkillOptions);
  };

  const handleChangeFormation = (value) => {
    setTraining(value);
  };

  const handleChangeAncien = (value) => {
    setLevel(value);
  };
  const handlePostTitle = (e) => {
    // console.log(e.target.value);
    setTitlePost(e.target.value);
  };

  const handledescription = (e) => {
    // console.log(e.target.value);
    setDescriptionoffre(e.target.value);
  };
  const handleInsertLogo = (e) => {
    // console.log(e.target.files[0]);
    setInsertLogo(e.target.files[0]);
  };

  return (
    <div className="pageprofiljesaispas">
      <Header />
      <div className="offersannonces">
        <h1 className="creationannonce">Creation de l'annonce</h1>

        <p> Titre de L'annonce</p>
        <input
          className="Title-poste"
          type="text"
          name="titlePost"
          required
          placeholder="Titre de l'annonce"
          onChange={handlePostTitle}
          value={titlePost}
        />
        <div>
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleInsertLogo}
            // value={insertLogo}
          />
        </div>

        <fieldset className="domaine">
          <legend className="legenddomaine">Domaine</legend>
          <label htmlFor="domaine">
            <Select
              className="villeya"
              options={Domaine}
              onChange={setSelectDomaine}
              value={selectDomaine}
              //   ref={selectDomaine}
              // isMulti
              placeholder="Sélectionnez vos compétences..."
            />
          </label>
        </fieldset>

        <fieldset className="domaine">
          <legend className="legenddomaine">Ville</legend>
          <label htmlFor="city">
            <Select
              className="city"
              options={City}
              onChange={setSelectCity}
              value={selectCity}
              //   ref={selectDomaine}
              // isMulti
              placeholder="Sélectionnez vos city..."
            />
          </label>
        </fieldset>

        <h2 className="comptetout">Compétences et Outils</h2>
        <div>
          <p className="skill_block_heading">Soft Skill</p>
          <Select
            className="skill_options"
            options={softSkills}
            value={selectSoftSkills}
            onChange={handleSelectSoftSkillChange}
            isMulti
            placeholder="Sélectionnez vos compétences..."
          />

          <p className="skill_block_heading">Hard Skills</p>
          <Select
            className="skill_options"
            options={hardSkills}
            value={selectHardSkills}
            onChange={handleSelectHardSkillChange}
            isMulti
            placeholder="Sélectionnez vos compétences..."
          />

          <p className="skill_block_heading">Categorie</p>
          <Select
            className="skill_options"
            options={categories}
            value={selectCategorie}
            onChange={handleSelectCategorie}
            placeholder="Sélectionnez vos compétences..."
          />
        </div>
        <div>
          <p> Description de l'annonce</p>
          <textarea
            className="Post-description"
            rows="25"
            cols="40"
            type="text"
            name="description"
            required
            placeholder="détaillé la fiche de poste"
            onChange={handledescription}
            value={descriptionoffre}
          />
        </div>
        <h2 className="formation"> Formation</h2>
        <div>
          <RadioGroup
            name="formation"
            selectedValue={training}
            onChange={handleChangeFormation}
          >
            <label htmlFor="oui">
              <Radio value="true" />
              oui
            </label>
            <label htmlFor="non">
              <Radio value="false" />
              non
            </label>
          </RadioGroup>
        </div>

        <h2 className="demandeanciennete">Ancienneté demandé</h2>
        <RadioGroup
          name="level"
          selectedValue={level}
          onChange={handleChangeAncien}
        >
          <label htmlFor="6mois">
            <Radio value="6 mois" />
            6mois
          </label>
          <label htmlFor="1ans">
            <Radio value="1 ans" />
            1ans
          </label>
          <label htmlFor="2ans">
            <Radio value="2 ans" />
            2ans
          </label>
        </RadioGroup>
      </div>
      <button type="button" className="recapt" onClick={handleoffre}>
        Recapitulatif
        {/* <Modal open={recap} onClose={onCloseRecap} center>
          <RecaPopup titi={hardSkills} />
        </Modal> */}
      </button>
    </div>
  );
}

export default Post;
