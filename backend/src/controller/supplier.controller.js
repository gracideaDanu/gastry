const UserController = require('./user.controller');
const SupplierModel = require('../models/supplier.model');
var ObjectId = require('mongoose').Types.ObjectId;

class SupplierController extends UserController {
    constructor(model) {
        super(model)
        this.model = model;

        this.fetchCatalog = this.fetchCatalog.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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

 async deleteItem (req, res ) {
        try {
            const userId = req.decoded.id;
            console.log(req.body.itemId)
            const itemId = new ObjectId(req.body.itemId);
            console.log(req.body.itemId)
            console.log(itemId);
            const result = await SupplierModel.findOneAndDelete({
                'catalog._id': itemId
            }).select('catalog.name')
            if (result === null) {
                res.status(404).json({
                    message: "Item doesn't exist"
                })
                return;
            }

            console.log(result);
            console.log("Hi")
            res.status(200).json({
                data: result,
                message: "Successfully deleted item"
            })
        }
        catch (e) {
            res.status(400).json({
                message: "Deleting item didnt work",
                error: e
            })
        }


 }




}

module.exports = new SupplierController(SupplierModel);
