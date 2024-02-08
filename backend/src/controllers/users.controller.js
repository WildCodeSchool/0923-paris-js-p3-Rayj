const jwt = require("jsonwebtoken");
const argon = require("argon2");
const userModel = require("../models/users.model");

const add = async (req, res, next) => {
  try {
    const user = req.body;
    user.Admin = 0;
    user.Picture = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;
    const [result] = await userModel.insert(user);
    if (result.insertId) {
      const [[newUser]] = await userModel.findById(result.insertId);
      const token = jwt.sign(
        { id: newUser.id_Users, admin: newUser.Admin },
        process.env.APP_SECRET,
        { expiresIn: "30d" }
      );
      res.cookie("auth-token", token, {
        expire: "30d",
        httpOnly: true /* secure en deploiment */,
        secure: false,
        sameSite: "lax",
      });
      res.status(201).json(newUser);
    } else res.sendStatus(402);
  } catch (error) {
    console.error("error", error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const [[user]] = await userModel.findByEmail(Email);
    if (!user) res.sendStatus(422);
    else if (await argon.verify(user.Password, Password)) {
      const token = jwt.sign(
        { id: user.id_Users, admin: user.Admin },
        process.env.APP_SECRET,
        { expiresIn: "30d" }
      );
      res.cookie("auth-token", token, {
        expire: "30d",
        httpOnly: true /* secure en deploiment */,
        secure: false,
        sameSite: "lax",
      });
      res.status(200).json(user);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [users] = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [user] = await userModel.findById(id);
    if (!user) res.sendStatus(422);
    else res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const putById = async (req, res, next) => {
  try {
    const id = req.userID;
    const data = req.body;
    const [result] = await userModel.updateById(id, data);
    if (result.affectedRows <= 0) res.sendStatus(422);
    else {
      const [[user]] = await userModel.findById(id);
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userModel.deleteById(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Utilisateur supprimé avec succès." });
    } else {
      res
        .status(404)
        .json({ message: "Aucun utilisateur trouvé avec cet ID." });
    }
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const [[user]] = await userModel.findById(req.body.userID);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  login,
  getAll,
  getById,
  putById,
  deleteById,
  getCurrentUser,
};
