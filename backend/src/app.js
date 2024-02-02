const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://mysite.com",
      "http://another-domain.com",
      "http://127.0.0.1:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());

const cookieParser = require("cookie-parser");

app.use(cookieParser());

const router = require("./router");

app.use("/api", router);

const logErrors = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);

  next(err);
};

app.use(logErrors);

module.exports = app;
