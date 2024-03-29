const router = require("express").Router();

const userController = require("../controllers/users.controller");
const auth = require("../middlewares/auth");
const fileUpload = require("../middlewares/upload.image");

// inscription user
router.post("/users", fileUpload.any(), auth.hashpassword, userController.add);

// connection user
router.post("/users/login", auth.isAuth, userController.login);

router.get("/users", auth.isAuth, auth.isAdmin, userController.getAll);
router.get("/user/me", auth.isAuth, userController.getCurrentUser);
// admin route
router.get("/users/:id", auth.isAuth, userController.getById);
router.put("/users", auth.isAuth, userController.putById);

router.delete(
  "/users/:id",
  auth.isAuth,
  auth.isAdmin,
  userController.deleteById
);

module.exports = router;
