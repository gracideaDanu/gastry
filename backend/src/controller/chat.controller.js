const Chat = require("../models/chat.model");

class ChatController {
    constructor(model) {
        this.model = model;
    }

    async writeMessage(req, res) {
        try {
            const userId = req.decoded.id;
            const message = req.body.message;
            const chatId = req.params._chatId;

            const newMessage = {
                message: message,
                user: userId,
                read: false,
            };

            const resultChat = await Chat.findOne({
                _id: chatId,
            }).select("messages");

            const updatedChat = [newMessage, ...resultChat.messages];
            resultChat.messages = updatedChat;
            await resultChat.save();

            return res.status(200).send({
                message: "Successfully added message",
            });
        } catch (e) {
            return res.status(400).send({
                error: e,
            });
        }
    }

    async fetchChat(req, res) {
        try {
            const chatId = req.params._chatId;
            const userId = req.decoded.id;
            const result = await Chat.findOne({
                _id: chatId,
            }).select("messages");

            // set status of unread msgs to 'read'
            await Chat.updateMany(
                {
                    _id: chatId,
                    "messages.user": {"$ne": userId},
                    "messages.read": false,
                },
                { $set: { "messages.$.read": true } },
                {
                    new: true,
                    runValidators: true,
                }
            );

            return res.status(200).send({
                message: "Fetch worked",
                data: result,
            });
        } catch (e) {
            return res.status(400).send({ message: e });
        }
    }

    async fetchChatNotificaitons(req, res) {
        try {
            const userId = req.decoded.id;
            const chatId = req.params._chatId;
            const notifications = await Chat.count({
                _id: chatId,
                "messages.read": false,
                "messages.user": {"$ne": userId},
            });
            return res.status(200).send({
                message: "Succefully fetched notifications",
                data: notifications,
            });
        } catch (e) {
            return res.status(400).send({ message: e });
        }
    }
}

module.exports = new ChatController();
