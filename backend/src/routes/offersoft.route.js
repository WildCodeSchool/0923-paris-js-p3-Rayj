const router = require("express").Router();
const offersoftController = require("../controllers/offersoft.controller");
const auth = require("../middlewares/auth");

router.post("/offersoft", auth.isAuth, offersoftController.addSoft);
router.get("/offersoft", offersoftController.getSoftAll);
router.get("/offersoft/:id", offersoftController.getSoftById);
router.delete("/offersoft", offersoftController.suppSoftAll);
router.delete("/offersoft/:id", auth.isAuth, offersoftController.suppSoftById);
module.exports = router;
