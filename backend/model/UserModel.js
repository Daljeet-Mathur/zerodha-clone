const { model } = require("mongoose");
// const bcrypt = require("bcryptjs");


const userSchema = require("../Schema/UserSchema");

const userModel = new model("User", userSchema);

module.exports = userModel ; 