const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/soa_12");
    console.log("Connect success!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };
