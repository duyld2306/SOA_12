// const Student = require('../models/Student');
const axios = require("axios");
const nodemailer = require("nodemailer");

class SendEmailController {
  async sendEmail(req, res) {
    const result = await axios.post(process.env.API_SIGN_TOKEN, req.body);

    const resultVerify = await axios.get(
      process.env.API_VERIFY_TOKEN + result.data.accessToken
    );
    // return res.json(resultVerify.data)

    if (resultVerify.data.student.isActive) {
      const scores = await axios.get(
        process.env.API_SCORES_STUDENT + resultVerify.data.student.code
      );
      if (scores.data.length !== 0) {
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
          to: resultVerify.data.student.email, // list of receivers
          subject: `Thành tích học tập học kỳ 8 sinh viên ${resultVerify.data.student.fullName} `, // Subject line // plain text body
          html: message,
        });

        // create template renderer
        // const templates = new EmailTemplates();

        transporter.sendMail(info, function (err, information) {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Sent ", information.response);
          return res.send("OK");
        });
      }
      // return res.json(scores.data)

      // }
      // return res.json(result.data)
      // if(result.data.success === true){
      //   let transporter = nodemailer.createTransport({
      //     host: process.env.HOST,
      //     port: process.env.SERVER_PORT,
      //     auth: {
      //       user: process.env.AUTH_USER, // generated ethereal user
      //       pass: process.env.AUTH_PASSWORD, // generated ethereal password
      //     },
      // });

      // let info = await transporter.sendMail({
      //     from: process.env.AUTH_USER, // sender address
      //     to: req.body.email, // list of receivers
      //     subject: `Xác thực email người dùng`, // Subject line // plain text body
      //     html: `<span><h1>Xin chào  ${result.data.username} !</h1> <p> Bạn cần truy cập đường link <a href=${process.env.API_CONFIRM + result.data.accessToken }>${process.env.API_CONFIRM + result.data.accessToken}</a> để xác thực email</p></span>`, // html body

      //   });

      //   // create template renderer
      //   // const templates = new EmailTemplates();

      //   transporter.sendMail(info , function (err,information){
      //       if(err){
      //           console.log(err);
      //           return;
      //       }
      //       console.log("Sent " , information.response);
      //       return res.send("OK")
      //   })
    }
    setInterval(async () => {
      const updateScore = await axios.get(
        process.env.API_SEND_MAIL + "update_scores/" + result.data.accessToken
      );
      if (updateScore.data !== 0) {
        const send = await axios.get(
          process.env.API_SEND_MAIL + "scores/" + result.data.accessToken
        );
        await axios.get(process.env.API_SEND_MAIL + "default_scores/");
        console.log(send.data);
      }
      console.log(updateScore.data);
    }, 10000);
    return res.json(result.data);
  }

  async requestScore(req, res) {
    const { accessToken } = req.params;

    const resultVerify = await axios.get(
      process.env.API_VERIFY_TOKEN + accessToken
    );
    const scores = await axios.get(
      process.env.API_SCORES_STUDENT + resultVerify.data.student.code
    );
    return res.json(scores.data);
  }

  async defaultScore(req, res) {
    await axios.get(process.env.API_SCORES_STUDENT + "/update");
    return res.json("success");
  }

  async checkUpdateScore(req, res) {
    const { accessToken } = req.params;

    const resultVerify = await axios.get(
      process.env.API_VERIFY_TOKEN + accessToken
    );
    const scores = await axios.get(
      process.env.API_SCORES_STUDENT +
        "/check_update/" +
        resultVerify.data.student.code
    );
    return res.json(scores.data);
  }

  async emailScore(req, res) {
    // return res.json(req.body)
    const { accessToken } = req.params;

    const resultVerify = await axios.get(
      process.env.API_VERIFY_TOKEN + accessToken
    );
    // return res.json(resultVerify.data)
    // return res.json(today)

    const scores = await axios.get(
      process.env.API_SCORES_STUDENT + resultVerify.data.student.code
    );
    // return res.json(scores.data)

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
      to: resultVerify.data.student.email, // list of receivers
      subject: `Thành tích học tập học kỳ 8 sinh viên ${resultVerify.data.student.fullName} `, // Subject line // plain text body
      html: message,
    });

    // create template renderer
    // const templates = new EmailTemplates();

    transporter.sendMail(info, function (err, information) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent ", information.response);
      return res.send("OK");
    });
  }
}

module.exports = new SendEmailController();
