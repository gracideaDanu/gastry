const UserController = require('./user.controller');
const SupplierModel = require('../models/supplier.model');

class SupplierController extends UserController {
    constructor(model) {
        super(model)
    }

 async fetchCatalog (req, res) {
        const userId = req.decoded.id;
 }
}

module.exports = new SupplierController(SupplierModel);
