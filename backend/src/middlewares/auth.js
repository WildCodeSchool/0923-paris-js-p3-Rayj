const argon = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashpassword = async (req, res, next) => {
  const { Password } = req.body;

  try {
    const hash = await argon.hash(Password, hashingOptions);
    req.body.Password = hash;
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const comparePassword = async (hash, password) => {
  return argon.verify(hash, password);
};

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies["auth-token"];
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.body.userID = decoded.id;
    req.body.admin = decoded.admin;
    req.userID = decoded.id;
    req.admin = decoded.admin;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json(error.message);
  }
};

const isAdmin = (req, res, next) => {
  if (req.admin) {
    next();
  } else res.sendStatus(403);
};

module.exports = {
  hashpassword,
  comparePassword,
  isAuth,
  isAdmin,
};
