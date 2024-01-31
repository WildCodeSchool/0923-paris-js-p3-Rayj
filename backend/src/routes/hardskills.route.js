const router = require("express").Router();

const harskillsController = require("../controllers/hardskills.controller");

router.get("/hardskills", harskillsController.readHardSkills);

router.get("/hardskills/:id", harskillsController.readHardSkillsById);

router.post("/hardskills", harskillsController.add);

module.exports = router;
