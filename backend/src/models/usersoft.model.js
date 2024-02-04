const db = require("../../database/client");

const insert = (usersoft) => {
  return db.query(
    "INSERT INTO Users_softskills(Users_idUsers, Softskills_id_Softskills) VALUES ?",
    [usersoft]
  );
};

const findSoftAll = () => {
  return db.query("SELECT * FROM Users_softskills");
};

const findSoftById = (id) => {
  return db.query(
    "SELECT Softskills.Name as softName FROM Users_softskills JOIN Softskills on softskills.id_Softskills = users_softskills.Softskills_id_Softskills WHERE users_softskills.Users_idUsers = ?",
    [id]
  );
};

const deleteSoftAll = () => {
  return db.query("DELETE FROM Users_softskills");
};

const deleteSoftById = (id) => {
  return db.query(
    "DELETE FROM Users_softskills WHERE Users_softskills.Users_idUsers =?",
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
