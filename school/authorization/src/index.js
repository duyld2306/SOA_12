const express = require("express"); //thư viện được cài
const path = require("path");
const app = express(); //() toán tử call
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("dotenv").config();

const route = require("./routes");

const cors = require("cors");

app.use(cors());

// //xu ly form
// app.use(express.urlencoded())
// //xu ly data
// app.use(express.json())

//routes init
route(app);

// 127.0.0.1 - localhost ánh xạ

app.listen(process.env.PORT || 8020);
