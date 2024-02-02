const db = require("../../database/client");

const insert = (offer) => {
  const { Description, Training, Level, Domaine, Location } = offer;

  return db.query(
    "INSERT INTO offers ( Date_of_publication, Post_title, Description, Training, Level, Domaine, Location, Users_idUsers) values (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      offer.Date_of_publication,
      offer.Post_title,
      Description,
      Training,
      Level,
      Domaine,
      Location,
      offer.Users_idUsers,
    ]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM offers WHERE id_Offers = ?", [id]);
};
const findAll = () => {
  return db.query("SELECT * FROM offers");
};

module.exports = {
  insert,
  findById,
  findAll,
};
