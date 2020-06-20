const UserController = require("./user.controller");
const CustomerModel = require("../models/customer.model");
const SupplierModel = require("../models/supplier.model");

class CustomerController extends UserController {
    constructor(model) {
        super(model);
    }

    getSuppliersList = async (req, res) => {
        try {
            const suppliers = await SupplierModel.find({});
            const suppliersInfo = suppliers.map((supplier) => {
                return { name: supplier.company, address: supplier.address };
            });
            res.status(200).send({
                message: "Successfully fetched all suppliers",
                data: suppliersInfo,
            });
        } catch (e) {
            res.status(400).send({
                error: e,
            });
        }
    };
}

module.exports = new CustomerController(CustomerModel);
