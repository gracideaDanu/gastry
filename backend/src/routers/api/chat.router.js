const express = require('express');
const chatRouter = express.Router();
const ChatController = require('../../controller/chat.controller');

chatRouter.get("/", ChatController.accessChat);


module.exports = chatRouter;