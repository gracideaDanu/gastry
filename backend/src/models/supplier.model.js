const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');
const Product = require('./product.model');


User.discriminator('Supplier', new Schema({
    catalog: {
        type: [Product]
    }
}));

module.exports = mongoose.model('Supplier');
