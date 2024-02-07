const router = require("express").Router();
const candidatesController = require("../controllers/candidates.controller");

const auth = require("../middlewares/auth");

router.post("/candidates", auth.isAuth, candidatesController.addCandidate);

router.get("/candidates", auth.isAuth, candidatesController.getAllCandidates);
router.get(
  "/candidates/admin",
  auth.isAuth,
  candidatesController.getAllCandidatesAdmin
);
router.get("/candidates/competences", candidatesController.getAllCompetences);
router.get("/candidates/offers", candidatesController.getCandidateOffersById);
router.get("/candidates/:id", candidatesController.getCandidateById);
router.delete(
  "/candidates/:id",
  auth.isAuth,
  candidatesController.removeCandidate
);

module.exports = router;
