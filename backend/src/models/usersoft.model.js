const db = require("../../database/client");

const insert = (usersoft) => {
  return db.query(
    "INSERT INTO Users_Softskills(Users_idUsers, Softskills_id_Softskills) VALUES ?",
    [usersoft]
  );
};

const findSoftAll = () => {
  return db.query("SELECT * FROM Users_Softskills");
};

const findSoftById = (id) => {
  return db.query(
    "SELECT Softskills.Name as softName FROM Users_Softskills JOIN Softskills on Softskills.id_Softskills = Users_Softskills.Softskills_id_Softskills WHERE Users_Softskills.Users_idUsers = ?",
    [id]
  );
};

const deleteSoftAll = (id) => {
  return db.query(
    "DELETE FROM Users_softskills WHERE Users_Hardskills.Users_idUsers = ?",
    [id]
  );
};

const deleteSoftById = (id) => {
  return db.query(
    "DELETE FROM Users_Softskills WHERE Users_Softskills.Users_idUsers =?",
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
