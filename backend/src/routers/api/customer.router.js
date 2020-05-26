const express = require('express');
const customerRouter = express.Router();
const checkAuth = require('../../middleware/verification').checkToken;

const CustomerController = require('../../controller/customer.controller');

// GET all customer
customerRouter.get('/', checkAuth, CustomerController.getAll);

// POST a new customer
customerRouter.post('/register', CustomerController.register);

// POST api/users/login
customerRouter.post("/login",  CustomerController.login);

//Delete all customers
customerRouter.delete('/', CustomerController.deleteAll);

module.exports = customerRouter;