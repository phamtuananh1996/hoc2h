const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestComment = new Schema({
  user_id:Number,
  body:String,
  user_vote:[{user_id:String}],
  created_at:{type:Date,default:Date.now}
});
module.exports = mongoose.model('TestComment', TestComment);