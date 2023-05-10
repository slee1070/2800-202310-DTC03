const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  type: {
    type: String,
    default: 'user'
  }
});


const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;