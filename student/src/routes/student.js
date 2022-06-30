const express = require("express");
const studentController = require("../app/controllers/StudentController");

const router = express.Router();

router.get("/student/:id", studentController.findStudentById);
router.get("/:id", studentController.updateValidation);
router.post("/changeEmail", studentController.updateStudent);
router.post("/", studentController.findStudent);

module.exports = router;
