const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role = new Schema({
    role_id: Number,
    name: String,
    permissions:[String],
});
module.exports = mongoose.model('Role', Role);