const argon = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");

const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const [[user]] = await userModel.readByEmail(Email);
    if (!user) res.sendStatus(422);
    else if (await argon.verify(user.Password, Password)) {
      const token = jwt.sign(
        { id: user.id_Users, admin: user.Admin },
        process.env.APP_SECRET,
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

const browse = async (req, res, next) => {
  try {
    const users = await userModel.readAll();
    console.info(users);

    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await userModel.read(req.params.id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const result = await userModel.update(updateData, id);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.json({ message: "User updated sucessfully", id });
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;

  try {
    const [newUser] = await userModel.insert(user);
    const dataUserById = await userModel.read(newUser.insertId);
    res.status(201).json(dataUserById);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await userModel.remove(id);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
};
