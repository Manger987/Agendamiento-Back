const { Router } = require('express');

module.exports = function({ ClientController }) {
    const router = Router();

    router.get('/hello', ClientController.sayHello)
    return router;
}