const mongoose = require("mongoose");
async function connect() {
  // mongodb+srv://khanhhung:0123654798a@studentdata.r0msa.mongodb.net/studentdata?retryWrites=true&w=majority
  try {
    await mongoose.connect("mongodb://localhost:27017/student_data");
    console.log("Connect success!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };
