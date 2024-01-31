const favoriteModel = require("../models/favorites.model");

const add = async (req, res, next) => {
  try {
    const favorite = req.body;
    favorite.userID = req.userID;

    const [result] = await favoriteModel.insert(favorite);

    if (result.affectedRows > 0) {
      res.status(201).json(favorite);
    } else {
      res.status(422).json({ error: "Unable to add favorite." });
    }
  } catch (error) {
    next(error);
  }
};
const remove = async (req, res, next) => {
  try {
    const offerId = req.params.id;
    const userId = req.userID;

    const [result] = await favoriteModel.deleteFavs(userId, offerId);

    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Favorite not found." });
    }
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [favorites] = await favoriteModel.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const id = req.body.userID;
    const [[favorite]] = await favoriteModel.findById(id);
    if (!favorite) res.sendStatus(422);
    else res.status(200).json(favorite);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  add,
  getAll,
  getById,
  remove,
};
