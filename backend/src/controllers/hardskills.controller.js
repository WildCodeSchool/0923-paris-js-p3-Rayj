const hardskillsModel = require("../models/hardskills.model");

// The R of BREAD - Read operation
const readHardSkills = async (req, res, next) => {
  try {

    // Fetch a specific softskill from the database based on the provided ID
    const [hardskills] = await hardskillsModel.getHardSkills();

    // If the softskill is not found, respond with HTTP 404 (Not Found)

    // Otherwise, respond with the item in JSON format
    if (hardskills == null) {
      res.sendStatus(404);
    } else {
      res.json(hardskills);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readHardSkillsById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [[hardskill]] = await hardskillsModel.getHardSkillsById(id);
    if (!hardskill) res.sendStatus(422);

    else res.status(200).json(hardskill);
  } catch (error) {
    next(error);
  }
};


const deleteHardSkillsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await hardskillsModel.deletHardSkillseById(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "hardskill supprimé avec succès." });
    } else {
      res.status(404).json({ message: "Aucun hardskill trouvé avec cet ID." });
    }

const add = async (req, res, next) => {
  try {
    const { name } = req.body;
    const [result] = await hardskillsModel.insert(name);
    if (!result.insertId) res.sendStatus(422);
    else res.sendStatus(201);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  readHardSkills,
  readHardSkillsById,
  deleteHardSkillsById,
  add,
};
