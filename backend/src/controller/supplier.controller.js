const UserController = require('./user.controller');
const SupplierModel = require('../models/supplier.model');

class SupplierController extends UserController {
    constructor(model) {
        super(model)
    }
}

module.exports = new SupplierController(SupplierModel);