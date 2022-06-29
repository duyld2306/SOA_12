const bcrypt = require("bcrypt");

const Student = require("../models/Student");

class StudentController {
  //[Post] getData
  async findStudent(req, res) {
    const { code, password, email } = req.body;

    const student = await Student.findOne({ code: code });
    if (!student)
      return res.json({
        success: false,
        message: "Mã sinh viên không hợp lệ!",
      });
    // const salt = bcrypt.genSaltSync(10)
    // const hash = bcrypt.hashSync(password, salt)
    // const result = await Student.findOneAndUpdate({code : code} , { password : hash } ,{new : true})
    //     return res.json({
    //         success : true,
    //         student : result
    //     })
    const checkPassword = bcrypt.compareSync(password, student.password);
    if (!checkPassword)
      return res.json({
        success: false,
        message: "Mật khẩu không chính xác !",
      });
    if (email === student.email) {
      if (student.isValidation && student.isActive)
        return res.json({
          success: false,
          message: "Tài khoản đã được xác thực email và đăng ký dịch vụ ! ",
        });
      if (student.isValidation)
        return res.json({
          success: false,
          confirm: false,
          message: "Tài khoản đã được xác thực email ! ",
        });
      if (student.isActive)
        return res.json({
          success: false,
          message:
            "Tài khoản đã được đăng ký dịch vụ , bạn cần xác thực mail để sử dụng dịch vụ ! ",
        });
      else {
        const result = await Student.findOneAndUpdate(
          { code: code },
          { isActive: true },
          { new: true }
        );
        return res.json({
          success: true,
          student: result,
        });
      }
    } else {
      if (student.isValidation && student.isActive)
        return res.json({
          success: false,
          message:
            "Tài khoản đã được xác thực và đăng ký dịch vụ với một email khác!",
        });
      if (student.isValidation)
        return res.json({
          success: false,
          message:
            "Tài khoản đã được xác thực với một email khác,bạn cần sử dụng email đã xác thực ! ",
        });
      if (student.isActive)
        return res.json({
          success: false,
          confirm: false,
          message: "Tài khoản đã được đăng ký dịch vụ với một email khác ! ",
          student,
        });
      if (student.email === "") {
        const result = await Student.findOneAndUpdate(
          { code: code },
          { email: email, isActive: true },
          { new: true }
        );
        res.json({
          success: true,
          student: result,
        });
      } else
        return res.json({
          success: false,
          confirm: false,
          message: "Tài khoản đang có một email khác ! ",
          student,
        });
    }
  }

  async findStudentById(req, res) {
    const { id } = req.params;
    const result = await Student.findById(id);
    return res.json(result);
  }

  async updateValidation(req, res) {
    const { id } = req.params;
    const result = await Student.findByIdAndUpdate(
      id,
      { isValidation: true, isActive: true },
      { new: true }
    );
    return res.json({
      success: true,
      student: result,
    });
  }

  async updateStudent(req, res) {
    const { code, email } = req.body;
    try {
      const result = await Student.findOneAndUpdate(
        { code: code },
        { email: email },
        { new: true }
      );
      return res.json({
        success: true,
        student: result,
      });
    } catch (error) {
      return res.json({ success: false, message: "Lỗi không xác định" });
    }
  }
}

module.exports = new StudentController();
