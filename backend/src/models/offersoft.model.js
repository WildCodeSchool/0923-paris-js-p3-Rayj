const db = require("../../database/client");

const insert = (offersoft) => {
  return db.query(
    "INSERT INTO Softskills_Offers(Offers_Id_offers, Softskills_id_Softskills) VALUES ?",
    [offersoft]
  );
};
const findSoftAll = () => {
  return db.query("SELECT * FROM Softskills_Offers");
};
const findSoftById = (id) => {
  return db.query(
    "SELECT Softskills.Name as softName FROM Softskills_Offers JOIN  Softskills on Softskills.id_Softskills = Softskills_Offers.Softskills_id_Softskills WHERE Softskills_Offers.Offers_Id_offers = ?",
    [id]
  );
};
const deleteSoftAll = () => {
  return db.query("DELETE FROM Softskills_Offers");
};
const deleteSoftById = (id) => {
  return db.query(
    "DELETE FROM Softskills_Offers WHERE Softskills_Offers.Offers_Id_offers =?",
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
