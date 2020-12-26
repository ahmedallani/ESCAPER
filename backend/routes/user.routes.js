const router = require("express").Router();
const authController = require("../db/controllers/auth.controller");
const userController = require("../db/controllers/user.controller");
const error = require("../utils/errors.utils");

// const multer =require('multer')
// const upload=multer()

router.post("api/register", authController.signUp);
router.post("api/login", authController.signIn);
router.get("api/logout", authController.logOut);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
module.exports = router;
