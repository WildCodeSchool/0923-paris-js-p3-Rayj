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

const findAllCandidates = () => {
  return db.query(
    "SELECT Offers.* FROM Candidates JOIN Offers ON Candidates.Offers_Id_offers = Offers.id_Offers"
  );
};

const deleteCandidate = (userId, offerId) => {
  return db.query(
    "DELETE FROM Candidates WHERE Users_idUsers = ? AND Offers_Id_offers = ?",
    [userId, offerId]
  );
};

module.exports = {
  insertCandidate,
  findById,
  findAllCandidates,
  deleteCandidate,
};
