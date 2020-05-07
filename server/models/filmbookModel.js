const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AccountSchema = new Schema({
  login: {
    type: String,
    required: 'Login jest wymagany',
    unique: true
  },
  email: {
    type: String,
    required: 'Email jest wymagany',
    unique: true
  },
  password:{
    type: String,
    required: 'Hasło jest wymagane'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Accounts', AccountSchema);