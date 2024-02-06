const db = require("../../database/client");

const getHardSkills = () => {
  return db.query("select * from Hardskills");
};

const getHardSkillsById = (id) => {
  return db.query("select * from Hardskills where id_Hardskills = ?", [id]);
};

const insert = (name) => {
  return db.query("insert into Hardskills ( Name ) values (?)", [name]);
};

module.exports = {
  getHardSkills,
  getHardSkillsById,
  insert,
};
