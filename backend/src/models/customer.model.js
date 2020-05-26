const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model')

User.discriminator('Customer', new Schema({
    restaurant: {
        type: String,
        required: true,
        minlength: [1, 'Name must be at least one character long']
    }
    
}))

module.exports = mongoose.model('Customer');
