const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    messages: [
        {
            message: String,
            user: {
                type: mongoose.Schema.Types.ObjectId,
            },
            date: {
                type: Date,
                default: Date.now,
                required: true
            }

        }
    ]
})


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;