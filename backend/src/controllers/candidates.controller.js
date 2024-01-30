const candidatesModel = require("../models/candidates.model");

const addCandidate = async (req, res, next) => {
  try {
    const candidate = req.body;

    const [result] = await candidatesModel.insertCandidate(candidate);

    if (result.affectedRows > 0) {
      res.status(201).json(candidate);
    } else {
      res.status(422).json({ error: "Unable to add candidate." });
    }
  } catch (error) {
    next(error);
  }
};

const removeCandidate = async (req, res, next) => {
  try {
    const userId = req.body.userID;
    const offerId = req.params.id;

    const [result] = await candidatesModel.deleteCandidate(userId, offerId);

    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Candidate not found." });
    }
  } catch (error) {
    next(error);
  }
};

const getAllCandidates = async (req, res, next) => {
  try {
    const [candidates] = await candidatesModel.findAllCandidates();
    res.status(200).json(candidates);
  } catch (error) {
    next(error);
  }
};

const getCandidateById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const [[candidate]] = await candidatesModel.findById(userId);

    if (!candidate) res.sendStatus(404);
    else res.status(200).json(candidate);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCandidate,
  getAllCandidates,
  getCandidateById,
  removeCandidate,
};
