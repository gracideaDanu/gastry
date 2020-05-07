const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema with required properties for an address, later used as a Schema.Type
let addressSchema = new Schema({
    street: {
        type: String,
        required: true,

    },
    streetTwo: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },

});



let itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        required: false
    }
});



//Schema for Supplier, uses addressSchema and catalogSchema
let supplierSchema =   new Schema({
    email: {
        type: String,
        required: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`]
    },
    password: {
        type: String,
        required: true,
        match: [/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,'Sorry password misses letter/number or is not 6 characters long ']
    },

    name: {
        type: String,
        required: true,
        minlength: [1, 'Name must be at least one character long']
    },

    address: {
        type: addressSchema,
        required: true
    },

    catalog: [itemSchema],

    date: {
        type: Date,
        default: Date.now
    }


});

const Supplier = mongoose.model('suppliers', supplierSchema);

module.exports = {
    sup: Supplier,
    address: addressSchema
};
