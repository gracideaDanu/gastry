const express = require('express');
const userRouter = express.Router();
const userModel = require('../../models/user.model');
const UserController = require('../../controller/user.controller');
const checkAuth = require('../../middleware/verification').checkToken;
const ordermodel = require('../../models/order.model');
const OrderController = require('../../controller/order.controller');

userRouter.post("/login",  new UserController(userModel).login);

userRouter.get('/:_id', checkAuth, new UserController(userModel).getUser);

//get orderlist

userRouter.get('/order/:_id', checkAuth, new OrderController(ordermodel).fetchOrders);

//place order
userRouter.post('/order/:_id', checkAuth, new OrderController(ordermodel).addOrder);

//delete Order
userRouter.post('/order/delete/:_id', checkAuth, new OrderController(ordermodel).deleteOrder);

//get specific Order
userRouter.get('/order/:_id', checkAuth, new OrderController(ordermodel).getOrder);


// UPDATE a user
userRouter.patch('/:_id', checkAuth, new UserController(userModel).updateUser);

module.exports = userRouter;