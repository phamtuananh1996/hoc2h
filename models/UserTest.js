const mongoose=require('mongoose');
const Schema =mongoose.Schema;
const UserTest = new Schema({
    user_id:String,
    point:Number,
    evaluetion_result:String,
    user_test_result:[{
        question_id:String,
        choiced:Number
    }]
  });
  module.exports = mongoose.model('UserTest', UserTest);