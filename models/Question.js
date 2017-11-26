const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    user:Number,
    Category:Number,
    title:String,
    body:String,
    votes:[String],
    is_resolved:Boolean,
    views:Number,
    answers:[String],
    tags:[String],
    followers:[String],
    state:Number,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', Question);