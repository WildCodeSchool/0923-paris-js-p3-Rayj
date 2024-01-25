const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const itemRouter = require("./routes/items.route");
const userRouter = require("./routes/users.route");
const offerRouter = require("./routes/offers.route");
// Apply routes
router.use(itemRouter);
router.use(userRouter);
router.use(offerRouter);
/* ************************************************************************* */

module.exports = router;
