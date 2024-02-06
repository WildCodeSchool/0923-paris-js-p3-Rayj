const offerhardModel = require("../models/offerhard.model");

const addHard = async (req, res, next) => {
  try {
    const offerhard = req.body;
    const arr = [];
    for (const h of offerhard.Hardskills_id_Hardskills) {
      arr.push([offerhard.Offers_Id_offers, h]);
    }
    const [result] = await offerhardModel.insert(arr);
    if (result.affectedRows > 0) {
      res.sendStatus(201);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};
const getHardAll = async (_, res, next) => {
  try {
    const [offerhard] = await offerhardModel.findHardAll();
    res.status(200).json(offerhard);
  } catch (error) {
    next(error);
  }
};
const getHardById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [offersofthard] = await offerhardModel.findHardById(id);
    if (offersofthard.hardkills_offers) res.sendStatus(422);
    else res.status(200).json(offersofthard);
  } catch (error) {
    next(error);
  }
};
const suppHardAll = async (_, res, next) => {
  try {
    await offerhardModel.deleteHardAll();
    res.status(204).json("tous les compétences sont supprimées");
  } catch (error) {
    next(error);
  }
};
const suppHardById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await offerhardModel.deleteHardById(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addHard,
  getHardAll,
  getHardById,
  suppHardAll,
  suppHardById,
};
