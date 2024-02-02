const db = require("../../database/client");

const insert = (softskill) => {
  const { Name } = softskill;

  return db.query("INSERT INTO softskills ( Name ) values (?)", [Name]);
};

const getSoftSkills = () => {
  return db.query("select * from softskills");
};

const getSoftSkillsById = (id) => {
  return db.query("select * from softskills where id_Softskills = ?", [id]);
};

const deleteSoftSkillsById = (id) => {
  return db.query("DELETE FROM softskills WHERE id_Softskills = ?", [id]);
};

module.exports = {
  insert,
  getSoftSkills,
  getSoftSkillsById,
  deleteSoftSkillsById,
};
