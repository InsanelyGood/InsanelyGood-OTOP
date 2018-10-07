const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    id: {
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
        type: String,
        required: true
    },
    telephone_number: {
        type: String,
        required: true
    },
    cart_list: {
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model('User', usersSchema)
