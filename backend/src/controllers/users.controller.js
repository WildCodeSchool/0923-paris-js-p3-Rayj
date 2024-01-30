const argon = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users.models");

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
        { expiresIn: "2h" }
      );
      res.cookie("auth-token", token, {
        expire: "2h",
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
        { expiresIn: "5h" }
      );
      res.cookie("auth-token", token, {
        expire: "5h",
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
    res.sendStatus(200).json(users);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  add,
  login,
  getAll,
};
