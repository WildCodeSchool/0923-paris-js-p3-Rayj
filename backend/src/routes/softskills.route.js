const router = require("express").Router();

const softskillsController = require("../controllers/softskills.controller");

const auth = require("../middlewares/auth");

router.post(
  "/softskills",
  auth.hashPassword,
  auth.isAuth,
  softskillsController.add
);

router.get("/softskills", softskillsController.readSoftSkills);

router.get("/softskills/:id", softskillsController.readSoftSkillsById);

router.delete(
  "/softskills/:id",
  auth.isAuth,
  auth.isAdmin,
  softskillsController.deleteSoftSkillsById
);

module.exports = router;
