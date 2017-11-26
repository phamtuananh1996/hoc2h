const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerQuestionTest = new Schema({
  body:String,
  order_display:Number
});
module.exports = mongoose.model('AnswerQuestionTest', AnswerQuestionTest);