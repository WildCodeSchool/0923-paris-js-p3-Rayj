const router = require("express").Router();
const favoriteController = require("../controllers/favorites.controller");
const auth = require("../middlewares/auth");

router.post("/favorites", auth.isAuth, favoriteController.add);
router.delete("/favorites/:id", auth.isAuth, favoriteController.remove);
router.get("/favorites", auth.isAuth, favoriteController.getAll);
router.get("/favorites/:id", favoriteController.getById);
module.exports = router;
