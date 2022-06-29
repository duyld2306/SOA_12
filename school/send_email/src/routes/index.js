const sendEmail = require("./send_email");

function route(app) {
  // app.get('/' ,(req, res) => {
  //   res.json('abc')
  // })
  app.use("/send_email", sendEmail);

  // app.use('/', newsRouter)
}

module.exports = route;
