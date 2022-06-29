const scoreRouter = require("./score");

function route(app) {
  app.use("/scores", scoreRouter);

  // app.use('/', newsRouter)
}

module.exports = route;
