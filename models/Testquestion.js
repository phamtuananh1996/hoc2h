const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestQuestion = new Schema({
  content:Number,
  correct:Boolean,
  explan:String,
  state:Number,
  answer:[{
    answer_id:String
  }]
});
module.exports = mongoose.model('TestQuestion', TestQuestion);