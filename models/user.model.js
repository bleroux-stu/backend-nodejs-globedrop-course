const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    language: String,
    country: String,
    userType: String,
});

const User = mongoose.model('user',UserSchema,'user');

module.exports = User;