const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const Test = new Schema({
  user_id: String,
  title: String,
  category_id: String,
  times:Number,
  number_of_question:Number,
  description:String,
  state:Number,
  level:Number,
  created_at:{type:Date,default:Date.now},
  order_display: Number,
  comments:[{comment_test_id:String}],
  questions:[{question_id:String}],
  user_test:[{
    user_test_id:String,
  }],
  user_rate:[{
    user_rate_id:String,
  }],
  views: {type:Number , default : 0}
}, { toJSON: { virtuals: true } });

Test.virtual('user', {
    ref: 'User',
    localField: 'user_id',
    foreignField: '_id',
    justOne: false
});
Test.virtual('category', {
  ref: 'Category',
  localField: 'category_id',
  foreignField: '_id',
  justOne: false
});

module.exports = mongoose.model('Test', Test);
