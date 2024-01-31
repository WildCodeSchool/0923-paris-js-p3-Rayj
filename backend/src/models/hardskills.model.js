const db = require("../../database/client");

const getHardSkills = () => {
  return db.query("select * from hardskills");
};

const getHardSkillsById = (id) => {
  return db.query("select * from hardskills where id_Hardskills = ?", [id]);
};

const deleteHardSkillsById = (id) => {
  return db.query("DELETE FROM hardskills WHERE id_Hardskills = ?", [id]);
};

const insert = (name) => {
  return db.query("insert into hardskills ( Name ) values (?)", [name]);
};

module.exports = {
  getHardSkills,
  getHardSkillsById,
  deleteHardSkillsById,
  insert,
};
