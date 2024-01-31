const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const itemRouter = require("./routes/items.route");
const userRouter = require("./routes/users.route");
const offerRouter = require("./routes/offers.route");
const userhardRouter = require("./routes/userhard.route");
const usersoftRouter = require("./routes/usersoft.route");
const softskillRouter = require("./routes/softskills.route");
const hardskillRouter = require("./routes/hardskills.route");
// Apply routes
router.use(itemRouter);
router.use(userRouter);
router.use(offerRouter);
router.use(usersoftRouter);
router.use(userhardRouter);
router.use(softskillRouter);
router.use(hardskillRouter);
/* ************************************************************************* */

module.exports = router;
