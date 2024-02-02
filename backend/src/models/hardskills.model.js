const db = require("../../database/client");

const insertHardSkills = (hardskill) => {
  const { Name } = hardskill;

  return db.query("INSERT INTO hardskills ( Name ) values (?)", [Name]);
};

const getHardSkills = () => {
  return db.query("select * from hardskills");
};

const getHardSkillsById = (id) => {
  return db.query("select * from hardskills where id_Hardskills = ?", [id]);
};

module.exports = {
  insertHardSkills,
  getHardSkills,
  getHardSkillsById,
};
