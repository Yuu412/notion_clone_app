const router = require("express").Router();

const { body } = require("express-validator");
require("dotenv").config();

const User = require("../models/user");
const userController = require("../controllers/user");

// Middleware
const validation = require("../handlers/validation");
const tokenHandler = require("../handlers/tokenHandler");

// ユーザー新規登録API
router.post(
  "/register",
  body("username")
    .isLength({ min: 8 })
    .withMessage("ユーザー名は8文字以上である必要があります。"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("パスワードは8文字以上である必要があります。"),
  body("confirmPassword")
    .isLength({ min: 8 })
    .withMessage("確認用パスワードは8文字以上である必要があります。"),
  body("username").custom((value) => {
    return User.findOne({ username: value }).then((User) => {
      if (User) {
        return Promise.reject("このユーザーは既に使われています。");
      }
    });
  }),
  validation.validate,
  userController.register
);

// ユーザーログイン用API
router.post(
  "/login",
  body("username")
    .isLength({ min: 8 })
    .withMessage("ユーザー名は8文字以上である必要があります。"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("パスワードは8文字以上である必要があります。"),
  validation.validate,
  userController.login
);

// JWT認証API
router.post("/verify-token", tokenHandler.verifyToken, (req, res) => {
  return res.status(200).json({ user: req.user });
});

module.exports = router;
