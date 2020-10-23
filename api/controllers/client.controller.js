class ClientController {
    sayHello(req, res) {
        return res.send({message: "Hello Client world"});
    }
}

module.exports = ClientController;