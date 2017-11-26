const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QAnswerComment = new Schema({
    user_id: Number,
    votes: Number,
    body: String,
    votes:[String],
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QAnswerComment',QAnswerComment);