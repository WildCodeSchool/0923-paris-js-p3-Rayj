const router = require("express").Router();

const auth = require("../middlewares/auth");

const harskillsController = require("../controllers/hardskills.controller");

router.get("/hardskills", auth.isAuth, harskillsController.readHardSkills);

router.get(
  "/hardskills/:id",
  auth.isAuth,
  harskillsController.readHardSkillsById
);

router.post("/hardskills", auth.isAuth, harskillsController.add);

module.exports = router;
