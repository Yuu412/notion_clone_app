const express = require("express");
const mongoose = require("mongoose");
const app = express();
PORT = 5050;

require("dotenv").config();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", //アクセス許可するオリジン
  })
);

// JSON形式を使用することの宣言
app.use(express.json());
app.use("/api/v1", require("./src/v1/routes"));

mongoose.set("strictQuery", false);
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("mongoDB: 接続成功");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中");
});
