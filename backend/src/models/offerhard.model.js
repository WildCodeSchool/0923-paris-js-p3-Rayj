const db = require("../../database/client");

const insert = (offerhard) => {
  return db.query(
    "INSERT INTO Hardskills_Offers( Offers_Id_offers, Hardskills_id_Hardskills) VALUES ?",
    [offerhard]
  );
};
const findHardAll = () => {
  return db.query("SELECT * FROM Hardskills_Offers");
};
const findHardById = (id) => {
  return db.query(
    "SELECT Hardskills.Name as hardName FROM Hardskills_Offers JOIN  Hardskills on Hardskills.id_Hardskills = Hardskills_Offers.Hardskills_id_Hardskills WHERE Hardskills_Offers.Offers_Id_offers = ?",
    [id]
  );
};
const deleteHardAll = () => {
  return db.query("DELETE FROM Hardskills_Offers");
};
const deleteHardById = (id) => {
  return db.query(
    "DELETE FROM Hardskills_Offers WHERE Hardskills_Offers.Offers_Id_offers =?",
    [id]
  );
};
module.exports = {
  insert,
  findHardAll,
  findHardById,
  deleteHardAll,
  deleteHardById,
};
