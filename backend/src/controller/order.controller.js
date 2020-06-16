const OrderModel = require("../models/order.model");
var ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/user.model');


class OrderController {
    constructor(model) {
        this.model = model;

        this.fetchOrders = this.fetchOrders.bind(this);
        this.addOrder = this.fetchOrders.bind(this);


    }

    async fetchOrders(req, res){
        try {

            const userId = req.decoded.id;

            const result = await OrderModel.findOne({
                _id: userId
            }).select('order')
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


    async addOrder (req,res ) {
        try {


            const userId = req.decoded.id;
            const { supplier_id, products} = req.body;
            let total=0;
            for (let product in products) {
                total+= product.price
            }
            const newItem = {
                customer_id: userId,
                supplier_id: supplier_id,
                products: products,
                total: total,
                in_out: "in"
            }
            console.log(newItem);
            const resultSupplier = await User.findOne({
                _id: supplier_id
            }).select('orders')
            const resultCustomer = await User.findOne({
                _id: userId
            }).select('orders')
            console.log(resultSupplier+" "+ resultCustomer)

            const productsUpdatedCustomer = [newItem, ...resultCustomer.orders];
            const productsUpdatedSupplier = [newItem, ...resultSupplier.orders];

            console.log(productsUpdatedCustomer)
            resultCustomer.catalog = productsUpdatedCustomer;
            resultSupplier.catalog = productsUpdatedSupplier;
            await resultSupplier.save();
            await resultCustomer.save();
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

    async deleteOrder (req, res ) {
        try {
            console.log(req.body.orderId)
            const orderId = new ObjectId(req.body.orderId);
            console.log(req.body.orderId)
            console.log(orderId);
            const result = await SupplierModel.findOneAndUpdate({
                'catalog._id': orderId
            }, {
                $pull: { orders: { _id: orderId}
                }
            })

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
    async modifyOrder (req, res) {
        try {

            console.log(req.body.itemId)
            const itemId = new ObjectId(req.body.itemId);
            console.log(itemId)
            const updatedItem = req.body;
            delete updatedItem['itemId']
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