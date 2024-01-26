const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const itemRouter = require("./routes/items.route");
const userRouter = require("./routes/users.route");
const softskillRouter = require("./routes/softskills.route");
const offerRouter = require("./routes/offers.route");

router.use(softskillRouter);
router.use(itemRouter);
router.use(userRouter);
router.use(offerRouter);

module.exports = router;
