const express = require('express');
const orderRouter = express.Router();
const checkAuth = require('../../middleware/verification').checkToken;

orderRouter.get('/:_id', checkAuth, SupplierController.getUser);

// UPDATE a customer
orderRouter.patch('/:_id', checkAuth, SupplierController.updateUser);

// POST a new customer
orderRouter.post('/place', checkAuth, SupplierController.register);