const db = require("../../database/client");

const insert = (userhard) => {
  return db.query(
    "INSERT INTO hardskills_offers( Offers_Id_offers, Hardskills_id_Hardskills) VALUES ?",
    [userhard]
  );
};
const findHardAll = () => {
  return db.query("SELECT * FROM hardskills_offers");
};
const findHardById = (id) => {
  return db.query(
    "SELECT hardskills.Name as hardName FROM hardskills_offers JOIN  hardskills on hardskills.id_Hardskills = hardskills_offers.Hardskills_id_Hardskills WHERE hardskills_offers.Offers_Id_offers = ?",
    [id]
  );
};
const deleteHardAll = () => {
  return db.query("DELETE FROM hardskills_offers");
};
const deleteHardById = (id) => {
  return db.query(
    "DELETE FROM hardskills_offers WHERE hardskills_offers.Offers_Id_offers =?",
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
