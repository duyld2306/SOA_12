const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SemesterSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  yearStudent: { type: Number, required: true },
  subjectsList: [{ type: Schema.Types.ObjectId, ref: "subjects" }],
});

const Semester = mongoose.model("semesters", SemesterSchema);
module.exports = Semester;
