const express = require("express"); //thư viện được cài
require("dotenv").config();
const app = express(); //() toán tử call
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require("path");

const route = require("./routes");

const cors = require("cors");

//Connect to DB

app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));
// //xu ly form
// app.use(express.urlencoded())
// //xu ly data
// app.use(express.json())

//routes init
route(app);

// 127.0.0.1 - localhost ánh xạ

app.listen(process.env.PORT || 8006);
