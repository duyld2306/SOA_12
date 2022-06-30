const scoreRouter = require("./score");

function route(app) {
  app.use("/scores", scoreRouter);
}

module.exports = route;
