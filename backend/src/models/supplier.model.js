const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model')

User.discriminator('Supplier', new Schema({
    catalog: {
        type: Schema.Types.ObjectId,
        ref: 'Catalog'
    },
    company: {
        type: String,
        required: true,
        minlength: [1, 'Name must be at least one character long']
    }
}))

module.exports = mongoose.model('Supplier');
