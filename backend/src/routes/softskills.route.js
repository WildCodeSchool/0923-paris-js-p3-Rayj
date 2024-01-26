const router = require("express").Router();

const softskillsController = require("../controllers/softskills.controller");
// const auth = require("../middlewares/auth");

// router.post("/users", auth.hashPassword, userController.add);
// router.post("/users/login", userController.login);
router.get("/softskills", softskillsController.readSoftSkills);

router.get("/softskills/:id", softskillsController.readSoftSkillsById);

module.exports = router;
