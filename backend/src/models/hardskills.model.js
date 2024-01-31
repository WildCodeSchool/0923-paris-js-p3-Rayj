const db = require("../../database/client");

const getHardSkills = () => {
  // Execute the SQL SELECT query to retrieve all softskills from the "softskills" table
  return db.query("select * from hardskills");
};

const getHardSkillsById = (id) => {
  // Execute the SQL SELECT query to retrieve a specific item by its ID
  return db.query("select * from hardskills where id_Hardskills = ?", [id]);
  // Return the first row of the result, which represents the item
};

const deleteHardSkillsById = (id) => {
  return db.query("DELETE FROM hardskills WHERE id_Hardskills = ?", [id]);
};

module.exports = {
  getHardSkills,
  getHardSkillsById,
  deleteHardSkillsById,
};
