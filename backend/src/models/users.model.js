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
  } = user;

  return db.query(
    "INSERT INTO users (Lastname, Firstname, Matricule, Password, Email, Phone, Seniority, Admin, Introduction) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
    ]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM users WHERE id_Users = ?", [id]);
};

const findByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE Email = ?", [email]);
};

const findAll = () => {
  return db.query("SELECT * FROM users");
};

module.exports = {
  insert,
  findById,
  findByEmail,
  findAll,
};
