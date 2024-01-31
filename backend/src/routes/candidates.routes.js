const router = require("express").Router();
const candidatesController = require("../controllers/candidates.controller");
const auth = require("../middlewares/auth");

router.post("/candidates", auth.isAuth, candidatesController.addCandidate);
router.delete(
  "/candidates/:id",
  auth.isAuth,
  candidatesController.removeCandidate
);
router.get("/candidates", auth.isAuth, candidatesController.getAllCandidates);
router.get("/candidates/:id", candidatesController.getCandidateById);
module.exports = router;
