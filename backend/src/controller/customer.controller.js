const UserController = require('./user.controller');
const CustomerModel = require('../models/customer.model');

class CustomerController extends UserController {
    constructor(model) {
        super(model)
    }
}

module.exports = new CustomerController(CustomerModel);