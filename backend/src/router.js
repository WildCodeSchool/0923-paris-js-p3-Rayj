const express = require("express");

const router = express.Router();

const itemRouter = require("./routes/items.route");
const userRouter = require("./routes/users.route");
const softskillRouter = require("./routes/softskills.route");
const hardskillRouter = require("./routes/hardskills.route");
const userhardRouter = require("./routes/userhard.route");
const usersoftRouter = require("./routes/usersoft.route");
const offerhardRouter = require("./routes/offerhard.route");
const offersoftRouter = require("./routes/offersoft.route");

const offerRouter = require("./routes/offers.route");

const candidateRouter = require("./routes/candidates.route");

router.use(softskillRouter);
router.use(hardskillRouter);

router.use(usersoftRouter);
router.use(userhardRouter);
router.use(offersoftRouter);
router.use(offerhardRouter);

router.use(itemRouter);
router.use(userRouter);
router.use(offerRouter);
router.use(candidateRouter);

module.exports = router;
