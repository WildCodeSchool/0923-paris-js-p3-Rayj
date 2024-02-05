const router = require("express").Router();

const userController = require("../controllers/users.controller");
const auth = require("../middlewares/auth");
const fileUpload = require("../middlewares/upload.image");

// inscription user
router.post("/users", fileUpload.any(), auth.hashpassword, userController.add);

// connection user
router.post("/users/login", userController.login);

// recuperer tous les users
router.get("/users", auth.isAuth, auth.isAdmin, userController.getAll);
// rafraichissement de la page
router.get("/users/me", auth.isAuth, userController.getCurrentUser);
router.get("/user/logout", auth.isAuth, userController.logout);

// admin route
router.get("/users/:id", auth.isAuth, userController.getById);
router.put("/users", auth.isAuth, userController.putById);

// delete route
router.delete("/users/:id", auth.isAuth, userController.deleteById);

module.exports = router;
