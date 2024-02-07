const categoriesModel = require("../models/categories.model");

const readcategories = async (req, res, next) => {
  try {
    const [categories] = await categoriesModel.findByCategorie();

    if (categories == null) {
      res.sendStatus(404);
    } else {
      res.json(categories);
    }
  } catch (err) {
    next(err);
  }
};

const readcategoriesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[hardskill]] = await categoriesModel.findByCategorieId(id);
    if (!hardskill) res.sendStatus(422);
    else res.status(200).json(hardskill);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readcategories,
  readcategoriesById,
};
