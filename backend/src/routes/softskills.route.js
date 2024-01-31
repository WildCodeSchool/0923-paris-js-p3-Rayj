const router = require("express").Router();

const softskillsController = require("../controllers/softskills.controller");

router.get("/softskills", softskillsController.readSoftSkills);

router.get("/softskills/:id", softskillsController.readSoftSkillsById);

router.post("/softskills", softskillsController.add);

module.exports = router;
