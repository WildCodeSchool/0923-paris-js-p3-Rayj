const router = require("express").Router();
const offerhardController = require("../controllers/offerhard.controller");
const auth = require("../middlewares/auth");

router.post("/offerhard", auth.isAuth, offerhardController.addHard);
router.get("/offerhard", offerhardController.getHardAll);
router.get("/offerhard/:id", offerhardController.getHardById);
router.delete("/offerhard", offerhardController.suppHardAll);
router.delete("/offerhard/:id", auth.isAuth, offerhardController.suppHardById);
module.exports = router;
