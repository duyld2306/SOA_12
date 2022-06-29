const express = require('express')
const router = express.Router()

const studentController = require('../app/controllers/StudentController')


// newController.index

// router.post('/create', dataController.createPosition)
// router.delete('/delete/:id',newController.delete)
// router.get('/:userId',newController.getUser)
router.get('/student/:id',studentController.findStudentById)
router.get('/:id',studentController.updateValidation)
router.post('/changeEmail',studentController.updateStudent)
router.post('/',studentController.findStudent)



module.exports = router