const Score = require("../models/Score");
class ScoreController {
  async getScore(req, res) {
    const { studentId } = req.params;

    const result = await Score.find({ studentId: studentId, semesterName: 8 });
    return res.json(result);
  }

  async checkUpdateScore(req, res) {
    const result = await Score.find({ isUpdate: true });
    res.json(result.length);
  }

  async updateScore(req, res) {
    const result = await Score.updateMany({ isUpdate: false });
    res.json(result);
  }
}

module.exports = new ScoreController();
