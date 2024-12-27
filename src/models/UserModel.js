
const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
});

const UserModel = mongoose.model('users',DataSchema);
module.exports = UserModel;