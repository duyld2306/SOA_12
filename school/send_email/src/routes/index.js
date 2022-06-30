const sendEmail = require("./send_email");

function route(app) {
  app.use("/send_email", sendEmail);
}

module.exports = route;
