const UserController = require("./user.controller");
const CustomerModel = require("../models/customer.model");
const SupplierModel = require("../models/supplier.model");

class CustomerController extends UserController {
    constructor(model) {
        super(model);
    }

    getSuppliersList = async (req, res) => {
        try {
            const suppliers = await SupplierModel.find({
                category: req.params.category,
            }, 'company address')
                .limit(parseInt(req.query.limit))
                .skip(parseInt(req.query.skip));
            res.status(200).send({
                message: "Successfully fetched all suppliers",
                data: suppliers,
            });
        } catch (e) {
            res.status(400).send({
                error: e,
            });
        }
    };
}

module.exports = new CustomerController(CustomerModel);
