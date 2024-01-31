const router = require("express").Router();

const hardskillsController = require("../controllers/hardskills.controller");

router.get("/hardskills", hardskillsController.readHardSkills);

router.get("/hardskills/:id", hardskillsController.readHardSkillsById);

router.delete("/hardskills/:id", hardskillsController.deleteHardSkillsById);

module.exports = router;
