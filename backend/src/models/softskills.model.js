const db = require("../../database/client");

const getSoftSkills = () => {
  // Execute the SQL SELECT query to retrieve all softskills from the "softskills" table
  return db.query(`select * from softskills`);
};

module.exports = {
  getSoftSkills,
};
