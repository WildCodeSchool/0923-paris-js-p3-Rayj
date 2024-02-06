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
    "INSERT INTO Users (Lastname, Firstname, Matricule, Password, Email, Phone, Seniority, Admin, Introduction, Picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
  return db.query("SELECT * FROM Users WHERE id_Users = ?", [id]);
};
const findByEmail = (email) => {
  return db.query("SELECT * FROM Users WHERE Email =?", [email]);
};
const findAll = () => {
  return db.query("SELECT * FROM Users");
};
const updateById = (id, { Email, Phone, Introduction }) => {
  return db.query(
    "UPDATE  Users SET Email = ?, Phone = ?, Introduction = ? WHERE id_Users = ?",
    [Email, Phone, Introduction, id]
  );
};

const deleteById = (id) => {
  return db.query("DELETE FROM Users WHERE id_Users = ?", [id]);
};

module.exports = {
  insert,
  findById,
  findByEmail,
  findAll,
  updateById,
  deleteById,
};
