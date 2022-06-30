const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const app = express();
const route = require("./routes");

//Connect to DB
db.connect();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes init
route(app);

app.listen(process.env.PORT || 8010);
