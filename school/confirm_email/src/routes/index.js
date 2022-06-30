const confirmRouter = require("./confirm");

function route(app) {
  app.use("/email_success", confirmRouter);
}

module.exports = route;
