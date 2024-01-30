const router = require("express").Router();

const userController = require("../controllers/users.controller");
const auth = require("../middlewares/auth");
const fileUpload = require("../middlewares/upload.image");

router.post("/users/login", userController.login);
router.get("/users", auth.isAuth, auth.isAdmin, userController.getAll);
router.post("/users", fileUpload.any(), auth.hashpassword, userController.add);

module.exports = router;
