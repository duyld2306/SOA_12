const studentRouter = require('./student')


function route(app){


      app.use('/students', studentRouter)

      // app.use('/', newsRouter)
      
}

module.exports = route;