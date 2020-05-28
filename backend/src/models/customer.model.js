const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model')

User.discriminator('Customer', new Schema({
    
}))

module.exports = mongoose.model('Customer');