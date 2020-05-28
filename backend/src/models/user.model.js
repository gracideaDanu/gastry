const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
    discriminatorKey: 'userType',
    timestamp: true
};

let userSchema =   new Schema({
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
    company: {
        type: String,
        required: true,
        minlength: [1, 'Name must be at least one character long']
    },
    address: {
        street: {
            type: String,
            required: false,
        },
        streetTwo: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        code: {
            type: String,
            required: false
        },
        required: false
    }
}, options);

const User = mongoose.model('User', userSchema);
module.exports = User;
