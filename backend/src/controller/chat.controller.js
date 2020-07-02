


class ChatController {
    constructor() {
       //this.model = model;


    }

    async accessChat (req, res)  {
        try {
            const io = req.io;
            let access = "access chat works!";
            io.sockets.emit("accessChat", access);
            console.log("Hi I accessed the chat");
            return res.status(200).json({message: "Successfully accessed chat"})
        } catch (e) {

        }
}

}

module.exports = new ChatController();
