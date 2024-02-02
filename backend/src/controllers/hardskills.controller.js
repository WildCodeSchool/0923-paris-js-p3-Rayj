const hardskillsModel = require("../models/hardskills.model");

const addHardSkill = async (req, res, next) => {
  try {
    const hardskill = req.body;
    const [result] = await hardskillsModel.insertHardSkills(hardskill);
    if (result.insertId) {
      const [[newHardSkill]] = await hardskillsModel.getHardSkillsById(
        result.insertId
      );
      res.status(201).json(newHardSkill);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const readHardSkills = async (req, res, next) => {
  try {
    const [hardskills] = await hardskillsModel.getHardSkills();

    if (hardskills == null) {
      res.sendStatus(404);
    } else {
      res.json(hardskills);
    }
  } catch (err) {
    next(err);
  }
};

const readHardSkillsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [hardskill] = await hardskillsModel.getHardSkillsById(id);
    if (hardskill.hardskills) res.sendStatus(422);
    else res.status(200).json(hardskill);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addHardSkill,
  readHardSkills,
  readHardSkillsById,
};
