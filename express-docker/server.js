const express = require("express");
const mongoose = require("mongoose");
const app = express();
PORT = 5050;
require("dotenv").config();

mongoose.set('strictQuery', false);
try {
    mongoose.connect(process.env.MONGODB_URL);
        console.log("mongoDB: 接続成功")
} catch (error) {
    console.log(error)
}

// ユーザー新規登録API
app.post("/register", (req, res) => {
    // パスワードの受け取り
    const password = req.body.password;

    try {
        // パスワードの暗号化(AES形式)
        req.body.password = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY)

    } catch {

    }
});

/*
app.listen(PORT, () => {
    console.log("ローカルサーバー起動中")
});
*/