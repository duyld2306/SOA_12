const Score = require("../models/Score");
const axios = require("axios");
class ScoreController {
  //[Get] getData
  async getScore(req, res) {
    const { studentId } = req.params;
    // Score.find({codeStudent }, function(err , score){
    //     if(!err) res.json(score)
    // })
    // const result = await Semester.findById( '62760d447712bf010813dccd' ).populate('subjectsList')

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

  // async createPosition (req, res ){
  //     res.json("abc")
  // }
}

module.exports = new ScoreController();
