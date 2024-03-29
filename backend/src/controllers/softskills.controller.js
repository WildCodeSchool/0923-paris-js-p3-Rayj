const softskillsModel = require("../models/softskills.model");

const readSoftSkills = async (req, res, next) => {
  try {
    const [softskills] = await softskillsModel.getSoftSkills();
    // If the softskill is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (softskills == null) {
      res.sendStatus(404);
    } else {
      res.json(softskills);
    }
  } catch (err) {
    next(err);
  }
};

const readSoftSkillsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[softskill]] = await softskillsModel.getSoftSkillsById(id);
    if (!softskill) res.sendStatus(422);
    else res.status(200).json(softskill);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { name } = req.body;
    const [result] = await softskillsModel.insert(name);
    if (!result.insertId) res.sendStatus(422);
    else res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  readSoftSkills,
  readSoftSkillsById,
};
