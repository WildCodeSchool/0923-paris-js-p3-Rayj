const router = require("express").Router();
const softskillsController = require("../controllers/softskills.controller");

router.get("/softskills", softskillsController.readSoftSkills);
router.get("/softskills/:id", softskillsController.readSoftSkillsById);
module.exports = router;
