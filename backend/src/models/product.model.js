const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
        name: {
            type: String,
            trim: true,
            required: true,
            maxLength: 32
        },
        description: {
            type: String,
            required: false,
            maxLength: 2000
        },
        price: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 32
        },
        tags: {
            type: String,
            maxLength:10,
            required: true
        },
        size: {
            type: String,
            maxLength:10,
            required: true
        }


    }, { timestamps: true}

);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
