const router = require("express").Router();

const offerController = require("../controllers/offers.controller");

router.post("/offers", offerController.add);
router.get("/offers", offerController.getAll);
router.get("/offers/:id", offerController.getById);
module.exports = router;
