const express = require("express"); //thư viện được cài

require("dotenv").config();

const app = express(); //() toán tử call
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const route = require("./routes");

// const db = require('./config/db')
const cors = require("cors");

// console.log()
//Connect to DB
// db.connect();

app.use(cors());

// //xu ly form
// app.use(express.urlencoded())
// //xu ly data
// app.use(express.json())

//routes init
route(app);

// 127.0.0.1 - localhost ánh xạ

app.listen(process.env.PORT || 8001);
