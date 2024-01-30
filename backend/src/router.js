const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const userRouter = require("./routes/users.route");
const softskillRouter = require("./routes/softskills.route");
const hardskillRouter = require("./routes/hardskills.route");
const categorieRouter = require("./routes/categories.route");
const offerRouter = require("./routes/offers.route");

router.use(softskillRouter);
router.use(hardskillRouter);
router.use(categorieRouter);
router.use(userRouter);
router.use(offerRouter);

/* ************************************************************************* */

module.exports = router;
