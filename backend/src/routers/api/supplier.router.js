const express = require('express');
const supplierRouter = express.Router();
const supplierModel = require('../../models/supplier.model');
const Supplier = supplierModel.sup

//GET all suppliers
supplierRouter.get('/',async (req, res) => {
    try {
        const suppliers = await Supplier.find({});
        res.status(200).send({
            message: 'Successfully fetched suppliers info',
            data: suppliers
        })
    } catch (e) {
        res.status(400).send({
            error: e
        })
    }
});

//POST a new supplier
supplierRouter.post('/', async (req, res) => {
    console.log(req.body);
    try {
        await Supplier.create(req.body).then(data => {
            res.status(200).send(data)
        })
    } catch (e) {
        res.status(400).send({
            error: e
        })
    }
});

supplierRouter.post('/push', async (req, res) => {
    console.log(req.body.tags);
    let item = {
        name: req.body.name,
        price: req.body.price,
        tags: req.body.tags
    };
    const filter = {"_id": "5eaf4f9f5759d6193dc304f9"};

    try {
       await Supplier.findOneAndUpdate(filter,{$push: { 'catalog': item}}).then(data => {
           res.status(200).send(data)
       })

    } catch (e) {
        res.status(400).send({
            error: e
        })
    }
});
supplierRouter.delete('/', async (req, res) => {
    try {
        await Supplier.deleteMany({}).then(data => {
            res.status(200).send(data)
        })
    }catch (e) {
        res.status(400).send({
            error: e
        })
    }
});

module.exports = supplierRouter;




