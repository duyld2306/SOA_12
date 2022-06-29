const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  code: { type: String, required: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  birth: { type: Date, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isValidation: { type: Boolean, required: true },
  isActive: { type: Boolean, required: true },
});

const Student = mongoose.model("students", StudentSchema);
module.exports = Student;
