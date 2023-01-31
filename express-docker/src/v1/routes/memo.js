const router = require("express").Router();
const memoController = require("../controllers/memo");
const tokenHandler = require("../handlers/tokenHandler");

// メモを作成
router.post("/", tokenHandler.verifyToken, memoController.create);

// ログインユーザーが投稿したメモを全取得
router.get("/", tokenHandler.verifyToken, memoController.getAll);

// ログインユーザーが投稿したメモを1つ取得
router.get("/:memoId", tokenHandler.verifyToken, memoController.getOne);

// ログインユーザーが投稿したメモを1つ更新
router.put("/:memoId", tokenHandler.verifyToken, memoController.update);

// ログインユーザーが投稿したメモを1つ削除
router.delete("/:memoId", tokenHandler.verifyToken, memoController.delete);

module.exports = router;
