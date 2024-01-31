const categoriesModel = require("../models/categories.model");

// The R of BREAD - Read operation
const readcategories = async (req, res, next) => {
  try {
    // Fetch a specific softskill from the database based on the provided ID
    const [categories] = await categoriesModel.findByCategorie();

    // If the softskill is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (categories == null) {
      res.sendStatus(404);
    } else {
      res.json(categories);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
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
