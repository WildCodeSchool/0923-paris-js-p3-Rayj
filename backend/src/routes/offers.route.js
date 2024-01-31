const router = require("express").Router();

const fileUpload = require("../middlewares/upload.image");
const offerController = require("../controllers/offers.controller");
const auth = require("../middlewares/auth");

router.post(
  "/offers",
  auth.isAuth,
  auth.isAdmin,
  fileUpload.any(),
  offerController.add
);
router.get("/offers", offerController.getAll);
router.get("/offers/:id", offerController.getById);

module.exports = router;
