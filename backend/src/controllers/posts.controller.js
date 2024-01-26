/* eslint-disable no-await-in-loop */

const structureData = (tab) => {
  const newTab = [];
  for (let i = 0; i < tab.length; i += 1) {
    const name = tab[i].Name;
    if (tab[i]?.id_Hardskills) {
      newTab.push({
        id_Hardskills: tab[i].id_Hardskills,
        value: name,
        label: name,
      });
    } else if (tab[i]?.id_Softskills) {
      newTab.push({
        id_Softskills: tab[i].id_Softskills,
        value: name,
        label: name,
      });
    } else {
      newTab.push({
        id_Categories: tab[i].id_Categories,
        value: name,
        label: name,
      });
    }
  }
  return newTab;
};

const postsModel = require("../models/posts.model");

const gethardposts = async (req, res, next) => {
  try {
    const [hardskills] = await postsModel.findByHardskills();
    res.status(200).json(await structureData(hardskills));
  } catch (error) {
    next(error);
  }
};

const getsoftposts = async (req, res, next) => {
  try {
    const [softskills] = await postsModel.findBySoftskills();
    res.status(200).json(await structureData(softskills));
  } catch (error) {
    next(error);
  }
};

const getcategoriepost = async (req, res, next) => {
  try {
    const [categorie] = await postsModel.findByCategorie();
    res.status(200).json(await structureData(categorie));
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(req.files)
    data.Logo = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }}`;

    data.userID = req.userID;
    data.tabSoftSkills = JSON.parse(data.tabSoftSkills);
    data.tabHardSkills = JSON.parse(data.tabHardSkills);
    const [offerAdd] = await postsModel.insert(req.body);
    const [[getOffer]] = await postsModel.findByOfferById(offerAdd.insertId);
    const dataAddCategorie = {
      idOffer: offerAdd.insertId,
      idCategorie: data.Categorie,
    };

    await postsModel.addCategorieOffer(dataAddCategorie);

    const [[getCategorie]] = await postsModel.findByCategorieById(
      data.Categorie
    );
    const tabSoftSkillsId = data.tabSoftSkills;
    const tabHardSkillsId = data.tabHardSkills;

    for (let i = 0; i < tabSoftSkillsId.length; i += 1) {
      const idSoftskills = tabSoftSkillsId[i].id_Softskills;
      // console.log(idSoftskills)
      await postsModel.addSoftskillsOffers(offerAdd.insertId, idSoftskills);
    }

    for (let i = 0; i < tabHardSkillsId.length; i += 1) {
      const idHardskills = tabHardSkillsId[i].id_Hardskills;
      await postsModel.addHardskillsOffers(offerAdd.insertId, idHardskills);
    }

    res.status(200).json({ offer: getOffer, Categories: getCategorie });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  gethardposts,
  getsoftposts,
  getcategoriepost,
  add,
};
