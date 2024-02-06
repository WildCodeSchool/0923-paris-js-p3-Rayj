const router = require("express").Router();
const usersoftController = require("../controllers/usersoft.controller");
const auth = require("../middlewares/auth");

router.post("/usersoft", auth.isAuth, usersoftController.addSoft);

router.get("/usersoft", usersoftController.getSoftAll);
router.get("/usersoft/:id", auth.isAuth, usersoftController.getSoftById);

router.delete("/usersoft", usersoftController.suppSoftAll);
router.delete("/usersoft/:id", auth.isAuth, usersoftController.suppSoftById);

module.exports = router;
