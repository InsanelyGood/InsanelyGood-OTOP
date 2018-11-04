const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  telephone_number: {
    type: String,
    required: true
  },
  cart_list: [
    {
      productID: {
        type: String,
        required: true
      },
      quantity: {
          type: Number,
          required: true
      }
    }
  ]
});

const User = module.exports = mongoose.model('Users', usersSchema)
