const express = require('express');
const customerRouter = express.Router();
const Customer = require('../../models/customer.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


//GET all customer
customerRouter.get('/',async (req, res) => {
    try {
        const customer = await Customer.find({});
        res.status(200).send({
            message: 'Successfully fetched customer info',
            data: customer
        })
    } catch (e) {
        res.status(400).send({
            error: e
        })
    }
});

//POST a new customer
customerRouter.post('/register', async (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    try{
       await Customer.findOne({email: req.body.email}).then(customer => {
            if (customer){
                return res.status(400).json({ email: "Email already exists" });
            }
            else {
                console.log("Creating newCustomer in else case");
                const newCustomer = new Customer({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    restaurant: req.body.restaurant,
                    'address.street': req.body.street,
                    'address.city': req.body.city ,
                    'address.state': req.body.state ,
                    'address.code': req.body.code


                });
                // Hash password before saving in database
                console.log("Hashing generate");
                bcrypt.genSalt(10,(err, salt) => {
                    console.log("Pre hasing hash");
                    bcrypt.hash(newCustomer.password,salt,(err1, hash) => {
                        if(err) throw err;
                        console.log("Add newCustomer to save");
                        newCustomer.password = hash;
                        newCustomer
                            .save()
                            .then(customer => res.status(200).json(customer))
                            .catch(err => res.status(400).send(err))

                    } )
                } )
            }
        })
    } catch (e) {
        res.status(400).send(e);
    }
    console.log(req.body);
    /*try {
        await Customer.create(req.body).then(data => {
            res.status(200).send({
                message: 'Successfully added new customer',
                data: data

            })
        })
    } catch (e) {
        res.status(400).send({
            error: e
        })
    } '*/
});


//Delete all customers
customerRouter.delete('/', async (req, res) => {
    try {
        await Customer.deleteMany({}).then(data => {
            res.status(200).send({
                message: 'Successfully deleted all customer info',
                data: data

            })
        })
    }catch (e) {
        res.status(400).send({
            error: e
        })
    }
});

module.exports = customerRouter;




