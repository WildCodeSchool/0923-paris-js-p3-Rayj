const offerModel = require("../models/offers.model");

const add = async (req, res, next) => {
  try {
    const offer = req.body;
    const [result] = await offerModel.insert(offer);
    if (result.insertId) {
      const [[newOffer]] = await offerModel.findById(result.insertId);
      res.status(201).json(newOffer);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};
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

module.exports = {
  add,
  getAll,
  getById,
};
