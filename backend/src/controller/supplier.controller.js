const UserController = require('./user.controller');
const SupplierModel = require('../models/supplier.model');

class SupplierController extends UserController {
    constructor(model) {
        super(model)
        this.model = model;

        this.fetchCatalog = this.fetchCatalog.bind(this);
        this.addItem = this.addItem.bind(this);
    }

 async fetchCatalog (req, res) {
        try {


        const userId = req.decoded.id;
        const result = await SupplierModel.findOne({
            _id: userId
        }).select('catalog')
        console.log(result);
        res.status(200).send({
            message: "Fetch worked",
            data: result.catalog
        });
        }
        catch (e) {
            res.status(400).json({message: e});
        }


 }

 async addItem (req,res ) {
        try {


            const userId = req.decoded.id;
            const {name, description, price, tags, size} = req.body;
            const newItem = {
                name: name,
                description: description,
                price: price,
                tags: tags,
                size: size
            }
            console.log(newItem);
            const result = await SupplierModel.findOne({
                _id: userId
            }).select('catalog')
            console.log(result)

            const productsUpdated = [newItem, ...result.catalog];
            console.log(productsUpdated)
            result.catalog = productsUpdated;
            await result.save();
            res.status(200).json({
                message: "Successfully added item"
            })

        }
        catch (e) {
            res.status(400).json({
                message: e
            })
        }



 }
}

module.exports = new SupplierController(SupplierModel);
