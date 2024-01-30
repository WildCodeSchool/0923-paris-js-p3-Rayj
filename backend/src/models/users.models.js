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
    Picture,
    Introduction,
  } = user;
  return db.query(
    "insert into users ( Lastname, Firstname, Matricule, Password,  Email, Phone, Seniority, Admin, Picture, Introduction) values (?,?,?,?,?,?,?,?,?,?)",
    [
      Lastname,
      Firstname,
      Matricule,
      Password,
      Email,
      Phone,
      Seniority,
      Admin,
      Picture,
      Introduction,
    ]
  );
};

const findById = (id) => {
  return db.query("select * from users where id_Users = ?", [id]);
};

const findByEmail = (email) => {
  return db.query("select * from users where Email = ?", [email]);
};

const findAll = () => {
  return db.query("select * from users");
};

module.exports = {
  insert,
  findById,
  findByEmail,
  findAll,
};
