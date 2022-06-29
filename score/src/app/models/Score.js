const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  code: { type: String, required: true },
  point: { type: Number, required: true },
  studentId: { type: String, required: true },
  subjectName: { type: String, required: true },
  semesterName: { type: Number, required: true },
  isUpdate: { type: Boolean, default: false },
});

const Score = mongoose.model("scores", ScoreSchema);
module.exports = Score;
