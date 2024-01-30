const router = require("express").Router();

const fileUpload = require("../middlewares/upload.image");
const postsControllers = require("../controllers/posts.controller");
const auth = require("../middlewares/auth");

router.get("/hardskills", postsControllers.gethardposts);
router.get("/softskills", postsControllers.getsoftposts);
router.get("/categorie", postsControllers.getcategoriepost);
router.post(
  "/post",
  auth.isAuth,
  auth.isAdmin,
  fileUpload.any(),
  postsControllers.add
);

module.exports = router;
