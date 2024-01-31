const router = require("express").Router();

const categoriesController = require("../controllers/categories.controller");

router.get("/categories", categoriesController.readcategories);

router.get("/categories/:id", categoriesController.readcategoriesById);

module.exports = router;
