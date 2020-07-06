const express = require('express');
const chatRouter = express.Router();
const ChatController = require('../../controller/chat.controller');
const checkAuth = require('../../middleware/verification').checkToken;


chatRouter.get("/", ChatController.accessChat);

chatRouter.get("/fetch",checkAuth,ChatController.fetchChat);

chatRouter.post("/:_chatId",checkAuth,ChatController.writeMessage);


module.exports = chatRouter;