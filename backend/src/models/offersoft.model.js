const db = require("../../database/client");

const insert = (offersoft) => {
  return db.query(
    "INSERT INTO softskills_offers(Offers_Id_offers, Softskills_id_Softskills) VALUES ?",
    [offersoft]
  );
};
const findSoftAll = () => {
  return db.query("SELECT * FROM softskills_offers");
};
const findSoftById = (id) => {
  return db.query(
    "SELECT softskills.Name as softName FROM softskills_offers JOIN  softskills on softskills.id_Softskills = softskills_offers.Softskills_id_Softskills WHERE softskills_offers.Offers_Id_offers = ?",
    [id]
  );
};
const deleteSoftAll = () => {
  return db.query("DELETE FROM softskills_offers");
};
const deleteSoftById = (id) => {
  return db.query(
    "DELETE FROM softskills_offers WHERE softskills_offers.Offers_Id_offers =?",
    [id]
  );
};
module.exports = {
  insert,
  findSoftAll,
  findSoftById,
  deleteSoftAll,
  deleteSoftById,
};
