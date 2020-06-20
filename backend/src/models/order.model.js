import supplier from "./supplier.model";
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
        products: [supplier.catalog.type]


    }, {timestamps: true}
);

module.exports = mongoose.model('Order');
