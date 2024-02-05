const router = require("express").Router();
const candidatesController = require("../controllers/candidates.controller");

const auth = require("../middlewares/auth");

router.post("/candidates", auth.isAuth, candidatesController.addCandidate);

router.get("/candidates", candidatesController.getAllCandidates);
router.get("/candidates/competences", candidatesController.getAllCompetences);
router.get("/candidates/:id", candidatesController.getCandidateById);
router.get("/candidates/offers", candidatesController.getCandidateOffersById);
router.delete(
  "/candidates/:id",
  auth.isAuth,
  candidatesController.removeCandidate
);

module.exports = router;
