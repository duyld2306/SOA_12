const confirmRouter = require("./confirm");

function route(app) {
  app.use("/email_success", confirmRouter);

  // app.use('/', newsRouter)
}

module.exports = route;
