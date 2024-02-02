const softskillsModel = require("../models/softskills.model");

const add = async (req, res, next) => {
  try {
    const softskill = req.body;
    const [result] = await softskillsModel.insert(softskill);
    if (result.insertId) {
      const [[newSoftSkill]] = await softskillsModel.getSoftSkillsById(
        result.insertId
      );
      res.status(201).json(newSoftSkill);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const readSoftSkills = async (req, res, next) => {
  try {
    const [softskills] = await softskillsModel.getSoftSkills();

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
    const [softskill] = await softskillsModel.getSoftSkillsById(id);
    if (softskill.softskills) res.sendStatus(422);
    else res.status(200).json(softskill);
  } catch (error) {
    next(error);
  }
};

const deleteSoftSkillsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await softskillsModel.deletSoftSkillsById(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "softskill supprimé avec succès." });
    } else {
      res.status(404).json({ message: "Aucun softskill trouvé avec cet ID." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  readSoftSkills,
  readSoftSkillsById,
  deleteSoftSkillsById,
};
