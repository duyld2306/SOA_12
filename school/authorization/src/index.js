const express = require("express"); //thư viện được cài
const cors = require("cors");
require("dotenv").config();
const route = require("./routes");

const app = express(); //() toán tử call

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes init
route(app);

app.listen(process.env.PORT || 8020);
