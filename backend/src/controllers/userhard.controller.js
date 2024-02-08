const userhardModel = require("../models/userhard.model");

const addHard = async (req, res, next) => {
  try {
    const userhard = req.body;
    const arr = [];
    for (const h of userhard.Hardskills_id_Hardskills) {
      arr.push([userhard.Users_idUsers, h]);
    }
    const [result] = await userhardModel.insert(arr);
    if (result.affectedRows > 0) {
      res.sendStatus(201);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getHardAll = async (_, res, next) => {
  try {
    const [userhard] = await userhardModel.findHardAll();
    res.status(200).json(userhard);
  } catch (error) {
    next(error);
  }
};

const getHardById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [usersofthard] = await userhardModel.findHardById(id);
    if (usersofthard.users_hardkills) res.sendStatus(422);
    else res.status(200).json(usersofthard);
  } catch (error) {
    next(error);
  }
};

const suppHardAll = async (_, res, next) => {
  try {
    await userhardModel.deleteHardAll();
    res.status(204).json("tous les compétences sont supprimées");
  } catch (error) {
    next(error);
  }
};

const suppHardById = async (req, res, next) => {
  try {
    const id = req.userID;
    await userhardModel.deleteHardById(id);
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
