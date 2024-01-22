const jwt = require("jsonwebtoken");
const { comparePassword } = require("../middlewares/auth");

const userModel = require("../models/users.model");

const add = async (req, res, next) => {
  try {
    const user = req.body;
    const [result] = await userModel.insert(user);

    if (result.insertId) {
      const [[newUser]] = await userModel.findById(result.insertId);
      res.status(201).json(newUser);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const [[user]] = await userModel.findByEmail(Email);
    console.info(user);
    if (!user) res.sendStatus(422);
    else if (comparePassword(user.Password, Password)) {
      const token = jwt.sign(
        { id: user.id_User, admin: user.Admin },
        process.env.APP_Secret,
        { expiresIn: "30d" }
      );
      res.cookie("auth-token", token, {
        expire: "30d",
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
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
    const { id } = req.params;
    const data = req.body;
    const [user] = await userModel.updateById(id, data);
    if (!user) res.sendStatus(422);
    else res.status(200).json(user);
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
};
