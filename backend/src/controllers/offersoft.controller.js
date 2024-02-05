const offersoftModel = require("../models/offersoft.model");

const addSoft = async (req, res, next) => {
  try {
    const offersoft = req.body;
    const arr = [];
    for (const s of offersoft.Softskills_id_Softskills) {
      arr.push([offersoft.Offers_id_offers, s]);
    }
    const [result] = await offersoftModel.insert(arr);
    if (result.affectedRows > 0) {
      res.sendStatus(201);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};
const getSoftAll = async (_, res, next) => {
  try {
    const [offersoft] = await offersoftModel.findSoftAll();
    res.status(200).json(offersoft);
  } catch (error) {
    next(error);
  }
};
const getSoftById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [offersofthard] = await offersoftModel.findSoftById(id);
    if (offersofthard.softskills_offers) res.sendStatus(422);
    else res.status(200).json(offersofthard);
  } catch (error) {
    next(error);
  }
};
const suppSoftAll = async (_, res, next) => {
  try {
    await offersoftModel.deleteSoftAll();
    res.status(204).json("tous les compétences sont supprimées");
  } catch (error) {
    next(error);
  }
};
const suppSoftById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await offersoftModel.deleteSoftById(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addSoft,
  getSoftAll,
  getSoftById,
  suppSoftAll,
  suppSoftById,
};
