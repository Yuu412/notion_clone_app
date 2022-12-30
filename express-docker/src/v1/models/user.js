// mongooseライブラリをインポート
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// 別ファイルからの参照を可能にする
module.exports = mongoose.model("User", userSchema)