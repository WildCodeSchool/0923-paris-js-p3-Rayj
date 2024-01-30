const express = require("express");

const router = express.Router();

const userRouter = require("./routes/users.route");
const offerRouter = require("./routes/offers.route");
const favoriteRouter = require("./routes/favorites.route");
const candidateRouter = require("./routes/candidates.routes");

router.use(userRouter);
router.use(offerRouter);
router.use(favoriteRouter);
router.use(candidateRouter);

module.exports = router;
