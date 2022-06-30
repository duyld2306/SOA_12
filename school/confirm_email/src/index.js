const express = require("express");
const cors = require("cors");
require("dotenv").config();
const route = require("./routes");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes init
route(app);

app.listen(process.env.PORT || 8006);
