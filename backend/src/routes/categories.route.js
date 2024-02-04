const router = require("express").Router();

const auth = require("../middlewares/auth");

const categoriesController = require("../controllers/categories.controller");

router.get("/categories", auth.isAuth, categoriesController.readcategories);

router.get(
  "/categories/:id",
  auth.isAuth,
  categoriesController.readcategoriesById
);

module.exports = router;
