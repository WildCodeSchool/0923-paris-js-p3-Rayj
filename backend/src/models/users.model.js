const db = require("../../database/client");

const insert = (user) => {
  const {
    Lastname,
    Firstname,
    Matricule,
    Password,
    Email,
    Phone,
    Seniority,
    Admin,
    Introduction,
    Picture,
  } = user;

  return db.query(
    "INSERT INTO users (Lastname, Firstname, Matricule, Password, Email, Phone, Seniority, Admin, Introduction, Picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      Lastname,
      Firstname,
      Matricule,
      Password,
      Email,
      Phone,
      Seniority,
      Admin,
      Introduction,
      Picture,
    ]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM users WHERE id_Users = ?", [id]);
};
const findByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE Email =?", [email]);
};
const findAll = () => {
  return db.query("SELECT * FROM users");
};
const updateById = (id, data) => {
  return db.query("UPDATE  users SET ? WHERE id_Users = ?", [data, id]);
};
module.exports = {
  insert,
  findById,
  findByEmail,
  findAll,
  updateById,
};
