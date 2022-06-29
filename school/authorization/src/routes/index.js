const authRouter = require("./auth");

function route(app) {
  app.use("/authorization", authRouter);
}

module.exports = route;
