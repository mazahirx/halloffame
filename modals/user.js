const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/halloffame");

const userScheme = mongoose.Schema({
    name: String,
    email: String,
    imgurl: String
});

module.exports = mongoose.model("user",userScheme);