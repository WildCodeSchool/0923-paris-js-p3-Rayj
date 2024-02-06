const db = require("../../database/client");

const findByCategorie = () => {
  return db.query("select * from Categories");
};

const findByCategorieId = (categorieId) => {
  return db.query("select * from Categories where id_Categories = ?", [
    categorieId,
  ]);
};

module.exports = {
  findByCategorieId,
  findByCategorie,
};
