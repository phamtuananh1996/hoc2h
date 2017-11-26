const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Permission = new Schema({
    permission_id:Number,
    name: String,
    description:String
});
module.exports = mongoose.model('Permission',Permission);