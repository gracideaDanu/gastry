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
        this.modifyItem = this.modifyItem.bind(this);
    }

 async fetchCatalog (req, res) {
        try {

        const userId = req.decoded.id;
        const result = await SupplierModel.findOne({
            _id: userId
        }).select('catalog')
        res.status(200).send({
            message: "Fetch worked",
            catalog: result.catalog
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
                message: "Successfully added item",
                catalog: result.catalog
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
            console.log(req.body.itemId)
            const itemId = new ObjectId(req.body.itemId);
            console.log(req.body.itemId)
            console.log(itemId);
            const result = await SupplierModel.findOneAndUpdate({
                'catalog._id': itemId
            }, {
                $pull: { catalog: { _id: itemId}
                }
            }, {returnOriginal: false})

            if (result === null) {
                res.status(404).json({
                    message: "Item doesn't exist"

                })
                return;
            }

            console.log(result);
            console.log("Hi")
            console.log(result.catalog)
            res.status(200).json({
                message: "Successfully deleted item",
                catalog: result.catalog

            })
        }
        catch (e) {
            res.status(400).json({
                message: "Deleting item didnt work",
                error: e
            })
        }


 }
 async modifyItem (req, res) {
        try {

            console.log(req.body._id)
            const itemId = new ObjectId(req.body._id);
            console.log(itemId)
            const updatedItem = req.body;
            delete updatedItem['_id']
            console.log(updatedItem)
            console.log(itemId)

        const doc = await SupplierModel.findOneAndUpdate({
            'catalog._id': itemId

        }, { $set: {"catalog.$.name" : updatedItem.name, "catalog.$.description": updatedItem.description, "catalog.$.price" : updatedItem.price, "catalog.$.tags" : updatedItem.tags, "catalog.$.size" : updatedItem.size}}, {returnOriginal: false})
            res.status(200).send({
                message: "Updated item successfully!",
                id: itemId,
                items: doc.catalog
            })

        }
        catch (e) {
            res.status(400).json({
                message: 'Modifying item didnt work'
            })
        }
 }




}

module.exports = new SupplierController(SupplierModel);
