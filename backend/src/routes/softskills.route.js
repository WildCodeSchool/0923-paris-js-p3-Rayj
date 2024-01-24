const router = require("express").Router();

const softskillsController = require("../controllers/softskills.controller");
// const auth = require("../middlewares/auth");

// router.post("/users", auth.hashPassword, userController.add);
// router.post("/users/login", userController.login);
router.get("/softskills", softskillsController.readSoftSkills);

module.exports = router;
