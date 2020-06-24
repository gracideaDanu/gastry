const Product = require('./product.model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

Product.discriminator('productList', new Schema({
    amount : {
        type: Number,
        max: 1000,
        min: 0
    }
}));


const orderSchema = new Schema({
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        customer_id: {
            type: String
        },
        supplier_id: {
            type: String
        },
        total: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 32
        },
        products:[mongoose.model('productList').schema],
        open: {
            type: Boolean,
            default: true
        }


    }, {timestamps: true}
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
