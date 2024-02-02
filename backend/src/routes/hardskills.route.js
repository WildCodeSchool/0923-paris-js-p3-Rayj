const router = require("express").Router();

const hardskillsController = require("../controllers/hardskills.controller");
const auth = require("../middlewares/auth");

router.post(
  "/hardskills",
  auth.hashPassword,
  auth.isAuth,
  auth.isAdmin,
  hardskillsController.addHardSkill
);

router.get("/hardskills", hardskillsController.readHardSkills);

router.get("/hardskills/:id", hardskillsController.readHardSkillsById);

module.exports = router;
