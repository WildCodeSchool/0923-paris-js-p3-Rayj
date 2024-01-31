const offerModel = require("../models/offers.model");
const categoriesModel = require("../models/categories.model");
/* eslint-disable no-await-in-loop */

const getAll = async (_, res, next) => {
  try {
    const [offers] = await offerModel.findAll();
    res.status(200).json(offers);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[offer]] = await offerModel.findById(id);
    if (!offer) res.sendStatus(422);
    else res.status(200).json(offer);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const data = req.body;
    data.Logo = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;

    data.userID = req.userId;
    data.tabSoftSkills = JSON.parse(data.tabSoftSkills);
    data.tabHardSkills = JSON.parse(data.tabHardSkills);
    const [offerAdd] = await offerModel.insert(data);
    const [[getOffer]] = await offerModel.findById(offerAdd.insertId);
    const dataAddCategorie = {
      Offers_Id_offers: offerAdd.insertId,
      Categories_idCategories: data.Categorie,
    };

    await offerModel.addCategorieOffer(dataAddCategorie);

    const [[getCategorie]] = await categoriesModel.findByCategorieId(
      data.Categorie
    );
    const tabSoftSkillsId = data.tabSoftSkills;
    const tabHardSkillsId = data.tabHardSkills;

    for (let i = 0; i < tabSoftSkillsId.length; i += 1) {
      const idSoftskills = tabSoftSkillsId[i].value;
      await offerModel.addSoftskillsOffers(offerAdd.insertId, idSoftskills);
    }

    for (let i = 0; i < tabHardSkillsId.length; i += 1) {
      const idHardskills = tabHardSkillsId[i].value;
      await offerModel.addHardskillsOffers(offerAdd.insertId, idHardskills);
    }

    res.status(200).json({ offer: getOffer, Categories: getCategorie });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  getAll,
  getById,
};
