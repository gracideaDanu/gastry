const Product = require('./product.model').schema;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        customer_id: {
            type: String,
            required: true
        },
        supplier_id: {
            type: String,
            required: true
        },
        in_out:{
            type: String,
            required: true,
            enum: ['in', 'out']
        },
        total: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 32
        },
        products:[Product]


    }, {timestamps: true}
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
