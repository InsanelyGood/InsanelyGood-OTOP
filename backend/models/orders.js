const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    purchased_list: [],
    date_time: {
        type: Date,
        default: Date.now
    },
    total_price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    shipping_address: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
})

const Order = module.exports = mongoose.model('Order', ordersSchema)
