const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QAnswer = new Schema({
    user_id: Number,
    is_best: Boolean,
    votes:[String],
    body: String,
    state: Number,
    comments:[String],
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QAnswer',QAnswer);