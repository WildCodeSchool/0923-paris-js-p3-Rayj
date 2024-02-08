const db = require("../../database/client");

const insert = (userhard) => {
  return db.query(
    "INSERT INTO Users_Hardskills( Users_idUsers, Hardskills_id_Hardskills) VALUES ?",
    [userhard]
  );
};

const findHardAll = () => {
  return db.query("SELECT * FROM Users_Hardskills");
};
const findHardById = (id) => {
  return db.query(
    "SELECT Hardskills.Name as hardName FROM Users_Hardskills JOIN Hardskills on Hardskills.id_Hardskills = Users_Hardskills.Hardskills_id_Hardskills WHERE Users_Hardskills.Users_idUsers = ?",
    [id]
  );
};

const deleteHardAll = () => {
  return db.query("DELETE FROM Users_Hardskills");
};

const deleteHardById = (id) => {
  return db.query(
    "DELETE FROM Users_Hardskills WHERE Users_Hardskills.Users_idUsers =?",
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
