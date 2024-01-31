const db = require("../../database/client");

const insert = (favorite) => {
  return db.query(
    "INSERT INTO Favorites (Users_idUsers, Offers_Id_offers) VALUES (?, ?) ",
    [favorite.userID, favorite.Offers_Id_offers]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM Favorites WHERE Users_idUsers = ?", [id]);
};

const deleteFavs = (userId, offerId) => {
  return db.query(
    "DELETE FROM Favorites WHERE Users_idUsers = ? AND Offers_Id_offers = ?",
    [userId, offerId]
  );
};
const findAll = () => {
  return db.query(
    "SELECT Offers.* FROM Favorites JOIN Offers ON Favorites.Offers_Id_offers = Offers.id_Offers"
  );
};
module.exports = {
  insert,
  findById,
  findAll,
  deleteFavs,
};
