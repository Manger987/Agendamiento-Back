const express =  require("express");
const { resolve } = require("./container");

class Server {
    constructor({config, router, prueba}) {
        this._config = config;
        this._express = express();
        this._express.use(router);
        this._saludo = prueba;
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this._express.listen(this._config.PORT, () => {
                const {port} = http.address();
                console.log(`Application running on port ${port} y saludo:${this._saludo}`);
                resolve();
            })
        })
    }
}
module.exports = Server;