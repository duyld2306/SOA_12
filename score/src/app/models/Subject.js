const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  semesterId: { type: Schema.Types.ObjectId, ref: "semesters" },
});

const Subject = mongoose.model("subjects", SubjectSchema);
module.exports = Subject;
