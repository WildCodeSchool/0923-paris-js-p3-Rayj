const db = require("../../database/client");

const findAll = () => {
  return db.query("SELECT * FROM Offers");
};

const findById = (offerId) => {
  return db.query("select * from Offers where id_Offers = ?", [offerId]);
};

const addCategorieOffer = (dataAddCategorie) => {
  return db.query(
    "insert into Offers_Categories ( Offers_Id_offers, Categories_idCategories ) values (?, ?)",
    [
      dataAddCategorie.Offers_Id_offers,
      dataAddCategorie.Categories_idCategories,
    ]
  );
};

const addHardskillsOffers = (idOffer, idHardskills) => {
  return db.query(
    "insert into Hardskills_Offers ( Hardskills_id_Hardskills, Offers_Id_offers ) values (?, ?)",
    [idHardskills, idOffer]
  );
};

const addSoftskillsOffers = (idOffer, idSoftskills) => {
  return db.query(
    "insert into Softskills_Offers ( Softskills_id_Softskills, Offers_Id_offers ) values (?, ?)",
    [idSoftskills, idOffer]
  );
};

const insert = (offer) => {
  const { Description, Training, Level, Domaine, Location, Logo } = offer;
  return db.query(
    "INSERT INTO Offers ( Date_of_publication, Post_title, Description, Training, Level, Domaine, Location, Users_idUsers, Logo) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      offer.Date_of_publication,
      offer.Post_title,
      Description,
      Training,
      Level,
      Domaine,
      Location,
      offer.userID,
      Logo,
    ]
  );
};

module.exports = {
  insert,
  findById,
  addHardskillsOffers,
  addSoftskillsOffers,
  addCategorieOffer,
  findAll,
};
