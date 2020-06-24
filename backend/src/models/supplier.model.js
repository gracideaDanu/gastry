const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');
const Product = require('./product.model').schema;


User.discriminator('Supplier', new Schema({
    catalog:  [Product],
    category: {
        type: String,
        enum: ["food","drinks","foodAndDrinks"]
    }
}));

module.exports = mongoose.model('Supplier');
