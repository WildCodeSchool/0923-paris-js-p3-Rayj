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
const favoriteRouter = require("./routes/favorites.route");
const candidateRouter = require("./routes/candidates.route");
const userhardRouter = require("./routes/userhard.route");
const usersoftRouter = require("./routes/usersoft.route");
const offerhardRouter = require("./routes/offerhard.route");
const offersoftRouter = require("./routes/offersoft.route");
// Apply routes
router.use(softskillRouter);
router.use(hardskillRouter);

router.use(usersoftRouter);
router.use(userhardRouter);
router.use(offersoftRouter);
router.use(offerhardRouter);

router.use(categorieRouter);
router.use(userRouter);
router.use(offerRouter);
router.use(favoriteRouter);
router.use(candidateRouter);

/* ************************************************************************* */

module.exports = router;
