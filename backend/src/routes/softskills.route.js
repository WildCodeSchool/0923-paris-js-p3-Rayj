const router = require("express").Router();

const auth = require("../middlewares/auth");

const softskillsController = require("../controllers/softskills.controller");

router.get("/softskills", auth.isAuth, softskillsController.readSoftSkills);

router.get(
  "/softskills/:id",
  auth.isAuth,
  softskillsController.readSoftSkillsById
);

router.post("/softskills", softskillsController.add);

module.exports = router;
