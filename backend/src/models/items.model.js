const db = require("../../database/client");

async function create(item) {
  const [result] = await db.query(`insert into items (title) values (?)`, [
    item.title,
  ]);

  return result.insertId;
}

async function read(id) {
  const [rows] = await db.query(`select * from items where id = ?`, [id]);

  return rows[0];
}

async function readAll() {
  const [rows] = await db.query(`select * from items`);

  return rows;
}

module.exports = {
  create,
  read,
  readAll,
};
