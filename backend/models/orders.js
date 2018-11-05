const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    purchasedList: [],
    dateTime: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const Order = module.exports = mongoose.model('Order', ordersSchema)
