const express = require('express');
const customerRouter = express.Router();
const checkAuth = require('../../middleware/verification').checkToken;

const CustomerController = require('../../controller/customer.controller');

// GET all customer
customerRouter.get('/', checkAuth, CustomerController.getUsers);

// GET
customerRouter.get('/suppliersList', CustomerController.getSuppliersList)

// GER a customer
customerRouter.get('/:_id', checkAuth, CustomerController.getUser);

// UDPATE a customer
customerRouter.patch('/:_id', checkAuth, CustomerController.updateUser);

// POST a new customer
customerRouter.post('/register', CustomerController.register);

// POST api/users/login
customerRouter.post("/login",  CustomerController.login);

//Delete all customers
customerRouter.delete('/', CustomerController.deleteAll);

module.exports = customerRouter;