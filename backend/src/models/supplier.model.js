const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model')

User.discriminator('Supplier', new Schema({
    catalog: {
        type: Schema.Types.ObjectId,
        ref: 'Catalog'
    }
}))

module.exports = mongoose.model('Supplier');