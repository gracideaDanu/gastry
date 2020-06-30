const OrderModel = require("../models/order.model");
var ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/user.model');


class OrderController {
    constructor(model) {
        this.model = model;

        this.fetchOrders = this.fetchOrders.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.modifyOrder = this.modifyOrder.bind(this);
        this.getOrder = this.getOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);

    }

    async fetchOrders(req, res){
        try {
            const userId = req.decoded.id;

            const result = await User.findOne({
                _id: userId
            }).select('orders')
            console.log(result);
            res.status(200).send({
                message: "Fetch worked",
                data: result.orders
            });
        }
        catch (e) {
            res.status(400).json({message: e});
        }


    }

    async getOrder (req,res){

    }


    async addOrder (req,res ) {
        console.log("should go in here")
        try {


            const userId = req.decoded.id;
            const { supplierId, products, total} = req.body;
            const newItem = {
                customer_id: userId,
                supplier_id: supplierId,
                products: products,
                total: total
            }
            console.log(newItem);
            const resultSupplier = await User.findOne({
                _id: supplierId
            }).select('orders')
            const resultCustomer = await User.findOne({
                _id: userId
            }).select('orders')
            //console.log(resultSupplier+" "+ resultCustomer)

            const productsUpdatedCustomer = [newItem, ...resultCustomer.orders];
            const productsUpdatedSupplier = [newItem, ...resultSupplier.orders];

            //console.log(productsUpdatedCustomer)
            resultCustomer.orders = productsUpdatedCustomer;
            resultSupplier.orders = productsUpdatedSupplier;
            console.log(resultCustomer.orders)
            await resultSupplier.save();
            await resultCustomer.save();
            res.status(200).json({
                message: "Successfully added item"
            })

        }
        catch (e) {
            console.log("yo didnt work")
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
            let fieldsToUpdate = req.body;
            if (req.body.orderId != null) {
                OrderModel.findByIdAndUpdate(req.body.orderId, { $set: fieldsToUpdate.data.fields }, { new: true, useFindAndModify: false }, function (err, result) {
                    if (err) {
                        res.status(400).send({
                            success: false,
                            error: err.message
                        });
                    }
                    res.status(200).send({
                        success: true,
                        data: result,
                        message: "Order updated successfully"
                    });
                });
            }

        }
        catch (e) {
            res.status(400).json({
                message: 'Modifying item didnt work'
            })
        }
    }



}

module.exports = OrderController;
