const express = require("express");
const cors = require("cors");
require("dotenv").config();
const route = require("./routes");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes init
route(app);

app.listen(process.env.PORT || 8001);
