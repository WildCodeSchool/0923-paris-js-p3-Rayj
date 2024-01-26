const db = require("../../database/client");

const findByHardskills = () => {
  return db.query("select * from hardskills");
};

const findBySoftskills = () => {
  return db.query("select * from softskills");
};

const findByCategorie = () => {
  return db.query("select * from categories");
};

const findByOfferById = (offerId) => {
  return db.query("select * from offers where id_Offers = ?", [offerId]);
};

const findByCategorieById = (categorieId) => {
  return db.query("select * from Categories where id_Categories = ?", [
    categorieId,
  ]);
};

const addSoftskills = (name) => {
  return db.query("insert into softskills ( Name ) values (?)", [name]);
};

const addHardskills = (name) => {
  return db.query("insert into hardskills ( Name ) values (?)", [name]);
};

const addCategorieOffer = (dataAddCategorie) => {
  return db.query(
    "insert into Offers_Categories ( Offers_Id_offers, Categories_idCategories ) values (?, ?)",
    [dataAddCategorie.idOffer, dataAddCategorie.idCategorie]
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
    "INSERT INTO offers ( Date_of_publication, Post_title, Description, Training, Level, Domaine, Location, Users_idUsers, Logo) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
  findByHardskills,
  findBySoftskills,
  findByCategorie,
  findByOfferById,
  findByCategorieById,
  addSoftskills,
  addHardskills,
  addHardskillsOffers,
  addSoftskillsOffers,
  addCategorieOffer,
  insert,
};
