const mongoose = require("mongoose");
async function connect() {
  // mongodb+srv://khanhhung:0123654798a@scoredata.2kak1.mongodb.net/scoredata?retryWrites=true&w=majority
  try {
    await mongoose.connect("mongodb://localhost:27017/score_data");
    console.log("Connect success!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };
