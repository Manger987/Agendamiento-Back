const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ UserRoutes, ClientRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

    apiRoute.use("/user", UserRoutes);
    apiRoute.use("/client", ClientRoutes);
    router.use("/", apiRoute);

    return router;
};
