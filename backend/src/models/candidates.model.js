const db = require("../../database/client");

const insertCandidate = (candidate) => {
  return db.query(
    "INSERT INTO Candidates (Users_idUsers, Offers_Id_offers, Status) VALUES (?, ?, ?)",
    [candidate.userID, candidate.Offers_Id_offers, candidate.Status]
  );
};
const findById = (id) => {
  return db.query("SELECT * FROM Candidates WHERE Users_idUsers = ?", [id]);
};
const findOffersById = () => {
  return db.query(
    "SELECT id_Offers, Post_title, Domaine FROM offers JOIN users on id_users = Users_idUsers"
  );
};
const findCompetences = () => {
  return db.query(
    "SELECT DISTINCT U.Lastname,UH.Users_idUsers,UH.Hardskills_id_Hardskills,HS.Name AS Hardskill_Name,US.Softskills_id_Softskills,SS.Name AS Softskill_Name FROM Users U JOIN Candidates C ON U.id_Users = C.Users_idUsers JOIN Users_Hardskills UH ON U.id_Users = UH.Users_idUsers JOIN  Hardskills HS ON UH.Hardskills_id_Hardskills = HS.id_Hardskills JOIN Users_Softskills US ON U.id_Users = US.Users_idUsers JOIN Softskills SS ON US.Softskills_id_Softskills = SS.id_Softskills"
  );
};

const findAllCandidates = (id) => {
  return db.query(
    "SELECT O.Domaine,O.id_Offers, O.Post_title, U.Picture, U.Lastname,U.Firstname,U.Email,U.Matricule,U.Id_Users FROM Users AS U JOIN Candidates AS C ON U.id_Users = C.Users_idUsers JOIN Offers O ON C.Offers_Id_offers = O.id_Offers WHERE O.Users_idUsers = ?",
    [id]
  );
};
const deleteCandidate = (userID, offerId) => {
  return db.query(
    "DELETE FROM Candidates WHERE Users_idUsers = ? AND Offers_Id_offers = ?",
    [userID, offerId]
  );
};

module.exports = {
  insertCandidate,
  findCompetences,
  findById,
  findOffersById,
  findAllCandidates,
  deleteCandidate,
};
