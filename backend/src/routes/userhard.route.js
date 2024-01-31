const router = require("express").Router();

const userhardController = require("../controllers/userhard.controller");
const auth = require("../middlewares/auth");

router.post("/userhard", auth.isAuth, userhardController.addHard);

router.get("/userhard", userhardController.getHardAll);
router.get("/userhard/:id", auth.isAuth, userhardController.getHardById);

router.delete("/userhard", userhardController.suppHardAll);
router.delete("/userhard/:id", auth.isAuth, userhardController.suppHardById);

module.exports = router;
