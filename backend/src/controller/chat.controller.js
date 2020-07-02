


class ChatController {
    constructor() {
       //this.model = model;


    }

    async accessChat (req, res)  {
        try {

            console.log("Hi I accessed the chat")
            return res.status(200).json({message: "Successfully accessed chat"})
        } catch (e) {

        }
}

}

module.exports = new ChatController();