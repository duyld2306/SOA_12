const axios = require("axios");
const jwt = require("jsonwebtoken");

class AuthController {
  //[Get] getData
  async signToken(req, res) {
    if (req.body.confirm) {
      const student = await axios.post(
        process.env.API_GET_STUDENT + "/changeEmail",
        req.body
      );
      if (student.data.success) {
        const accessToken = jwt.sign(
          { userId: student.data.student._id },
          process.env.ACCESS_TOKEN_SECRET
        );
        return res.json({
          success: true,
          accessToken: accessToken,
          username: student.data.student.fullName,
        });
      }
    } else {
      const student = await axios.post(process.env.API_GET_STUDENT, req.body);
      // res.json(student.data)

      if (student.data.success) {
        const accessToken = jwt.sign(
          { userId: student.data.student._id },
          process.env.ACCESS_TOKEN_SECRET
        );
        return res.json({
          success: true,
          accessToken: accessToken,
          userId: student.data.student._id,
          username: student.data.student.fullName,
        });
      }
      return res.json(student.data);
    }
  }

  async verifyToken(req, res) {
    const { accessToken } = req.params;
    // res.json(req.body)
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      const student = await axios.get(
        process.env.API_GET_STUDENT + "/" + decoded.userId
      );
      return res.json(student.data);
    } catch (err) {
      res.json(err);
    }
    // const user = await User.findOne({_id : decoded.userID})
  }
}

module.exports = new AuthController();
