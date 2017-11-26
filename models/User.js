const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Test = require('./Test');
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  email: String,
  password: String,
  state: Number,
  provider_id: Number,
  provider_name: String,
  code: String,
  role: Number,
  profile: {
    full_name: String,
    job: String,
    local: String,
    phone: Number,
    birthday: Date,
    avatar: {type:String,default:"http://i.imgur.com/kHn39EY.jpg"},
    coins: Number,
    reputations: Number,
    introduction: String
  }

});

User.virtual('tests', {

  ref: 'Test',
  localField: '_id',
  foreignField: 'user_id',
  justOne: false

});

User.methods.signJwt = function (id) {
  return jwt.sign({user_id: id}, process.env.JWT_SECRET_KEY, {expiresIn: 24 * 60 * 60});
}

User.methods.hashSync = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

User.methods.compareSync = function (password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', User);