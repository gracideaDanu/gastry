const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const supImports = require('./supplier.model');
const addressSchema = supImports.address;


//Schema for Customer, uses addressSchema
let customerSchema =   new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },


    email: {
        type: String,
        required: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`]
    },
    password: {
        type: String,
        required: true
    },

    restaurant: {
        type: String,
        required: true,
        minlength: [1, 'Name must be at least one character long']
    },

    address: {
        type: addressSchema,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }



});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;


