const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tag = new Schema({
    category:Number,
    name: String
});
module.exports = mongoose.model('Tag', Tag);