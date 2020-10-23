const { asClass, createContainer, asFunction, asValue } = require("awilix");
const StartUp = require("./startup");
const Server = require("./server");

const { UserController, ClientController } = require("../api/controllers");
const Routes = require("../api/routes");
const UserRoutes = require('../api/routes/user.routes');
const ClientRoutes = require('./routes/client.routes');
const config = require("../config/environments");

const saludo = require("./prueba/prueba").saludo;

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    UserController: asClass(UserController).singleton(),
    ClientController: asClass(ClientController).singleton(),
  })
  .register({
    router: asFunction(Routes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    prueba: asValue(saludo),
  })
  .register({
      UserRoutes: asFunction(UserRoutes).singleton(),
      ClientRoutes: asFunction(ClientRoutes).singleton()
  })

module.exports = container;
