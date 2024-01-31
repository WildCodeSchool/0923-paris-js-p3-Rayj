const db = require("../../database/client");

const getSoftSkills = () => {
  // Execute the SQL SELECT query to retrieve all softskills from the "softskills" table
  return db.query("select * from softskills");
};
const getSoftSkillsById = (id) => {
  // Execute the SQL SELECT query to retrieve a specific item by its ID
  return db.query("select * from softskills where id_Softskills = ?", [id]);
  // Return the first row of the result, which represents the item
};

const insert = (name) => {
  return db.query("insert into softskills ( Name ) values (?)", [name]);
};

module.exports = {
  getSoftSkills,
  getSoftSkillsById,
  insert,
};
