const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/upload"),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${Math.random()}.${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const type = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
  if (type.includes(file.mimetype)) cb(null, true);
  else {
    cb(null, false);
    cb(new Error("Mauvais type de fichier"));
  }
};
module.exports = multer({ storage, fileFilter });
