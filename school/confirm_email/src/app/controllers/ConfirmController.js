const axios = require("axios");
const nodemailer = require("nodemailer");

class ConfirmController {
  //[Get] getData
  async confirmationEmail(req, res) {
    // res.json(req.params)

    const result = await axios.get(process.env.API_VERIFY_TOKEN + accessToken);
    // return res.json(result.data)

    if (result.data.student.isValidation) {
      const scores = await axios.get(
        process.env.API_SCORES_STUDENT + result.data.student.code
      );

      const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.SERVER_PORT,
        auth: {
          user: process.env.AUTH_USER, // generated ethereal user
          pass: process.env.AUTH_PASSWORD, // generated ethereal password
        },
      });

      let message =
        '<table style="border: 1px solid #333;">' +
        "<thead >" +
        "<th> Môn học </th>" +
        "<th> Điểm số </th>" +
        /*...*/
        "</thead>";

      for (const { subjectName, point /*...*/ } of scores.data) {
        message +=
          "<tr>" +
          "<td>" +
          subjectName +
          "</td>" +
          "<td>" +
          point +
          "</td>" +
          /*...*/
          "</tr>";
      }

      message += "</table>";

      let info = await transporter.sendMail({
        from: process.env.AUTH_USER, // sender address
        to: result.data.student.email, // list of receivers
        subject: `Thành tích học tập học kỳ 8 sinh viên ${result.data.student.fullName} `, // Subject line // plain text body
        html: message,
      });

      // create template renderer
      // const templates = new EmailTemplates();

      transporter.sendMail(info, function (err, infomation) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Sent ", infomation.response);
        return res.send("OK");
      });
    }
    return res.json(result.data);
  }

  // async createPosition (req, res ){
  //     res.json("abc")
  // }
}

module.exports = new ConfirmController();
