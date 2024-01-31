const db = require("../../database/client");

const insert = (userhard) => {
  return db.query(
    "INSERT INTO users_hardskills( Users_idUsers, Hardskills_id_Hardskills) VALUES ?",
    [userhard]
  );
};

const findHardAll = () => {
  return db.query("SELECT * FROM users_hardskills");
};
const findHardById = (id) => {
  return db.query(
    "SELECT hardskills.Name as hardName FROM users_hardskills JOIN  hardskills on hardskills.id_Hardskills = users_hardskills.Hardskills_id_Hardskills WHERE users_hardskills.Users_idUsers = ?",
    [id]
  );
};

const deleteHardAll = () => {
  return db.query("DELETE FROM users_hardskills");
};

const deleteHardById = (id) => {
  return db.query(
    "DELETE FROM users_hardskills WHERE users_hardskills.Users_idUsers =?",
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
