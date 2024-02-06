const usersoftModel = require("../models/usersoft.model");

const addSoft = async (req, res, next) => {
  try {
    const usersoft = req.body;
    const arr = [];
    for (const s of usersoft.Softskills_id_Softskills) {
      arr.push([usersoft.Users_idUsers, s]);
    }
    const [result] = await usersoftModel.insert(arr);
    if (result.affectedRows > 0) {
      res.sendStatus(201);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getSoftAll = async (_, res, next) => {
  try {
    const [usersoft] = await usersoftModel.findSoftAll();
    res.status(200).json(usersoft);
  } catch (error) {
    next(error);
  }
};

const getSoftById = async (req, res, next) => {
  try {
    const id = req.userID;
    const [usersoft] = await usersoftModel.findSoftById(id);
    if (usersoft.users_softskills) res.sendStatus(422);
    else res.status(200).json(usersoft);
  } catch (error) {
    next(error);
  }
};

const suppSoftAll = async (req, res, next) => {
  try {
    const id = req.userID;
    await usersoftModel.deleteSoftAll(id);
    res.status(204).json("tous les compétences sont supprimées");
  } catch (error) {
    next(error);
  }
};

const suppSoftById = async (req, res, next) => {
  try {
    const id = req.userID;
    await usersoftModel.deleteSoftById(id);
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
