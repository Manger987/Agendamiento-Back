class UserController {
    sayHello(req, res) {
        return res.send({message: "Hello world"});
    }

    async getUsers() {
        return res.send({message: "Hello Users"});
    }
}

module.exports = UserController;