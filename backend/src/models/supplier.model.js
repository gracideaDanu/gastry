const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model')

const productSchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true,
            required: true,
            maxLength: 32
        },
        description: {
            type: String,
            required: true,
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



User.discriminator('Supplier', new Schema({
    catalog: {
        type: [productSchema]

    }
}));

module.exports = mongoose.model('Supplier');
