const express = require('express');
const supplierRouter = express.Router();
const checkAuth = require('../../middleware/verification').checkToken;

const SupplierController = require('../../controller/supplier.controller');

// GET all Supplier
supplierRouter.get('/', checkAuth, SupplierController.getUsers);


supplierRouter.get('/fetchCatalog', checkAuth, SupplierController.fetchCatalog);

// GER a Supplier
supplierRouter.get('/:_id', checkAuth, SupplierController.getUser);

// UPDATE a Supplier
supplierRouter.patch('/:_id', checkAuth, SupplierController.updateUser);

// POST a new Supplier
supplierRouter.post('/register', SupplierController.register);

// POST api/users/login
supplierRouter.post("/login",  SupplierController.login);

//Delete all Suppliers
supplierRouter.delete('/', SupplierController.deleteAll);



supplierRouter.put('/addItem', checkAuth, SupplierController.addItem);

supplierRouter.put('/deleteItem', checkAuth, SupplierController.deleteItem);

supplierRouter.put('/modifyItem', checkAuth, SupplierController.modifyItem);

module.exports = supplierRouter;
