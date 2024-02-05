const db = require("../../database/client");

const insert = (usersoft) => {
  return db.query(
    "INSERT INTO users_softskills(Users_idUsers, Softskills_id_Softskills) VALUES ?",
    [usersoft]
  );
};

const findSoftAll = () => {
  return db.query("SELECT * FROM users_softskills");
};

const findSoftById = (id) => {
  return db.query(
    "SELECT softskills.Name as softName FROM users_softskills JOIN  softskills on softskills.id_Softskills = users_softskills.Softskills_id_Softskills WHERE users_softskills.Users_idUsers = ?",
    [id]
    // "SELECT Name FROM softskills JOIN users_softskills ON Users_idUsers = id_Softskills = ?",
    // [id]
  );
};

const deleteSoftAll = () => {
  return db.query("DELETE FROM users_softskills");
};

const deleteSoftById = (id) => {
  return db.query(
    "DELETE FROM users_softskills WHERE users_softskills.Users_idUsers =?",
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
