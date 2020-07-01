const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    messages : [
        {
            message : String,
            meta : [
                {
                    user : {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : 'Order'
                    },
                    delivered : Boolean,
                    read : Boolean
                }
            ]
        }
    ]
})


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;