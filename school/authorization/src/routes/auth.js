const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/AuthController");

router.get("/verify/:accessToken", authController.verifyToken);

router.post("/", authController.signToken);

module.exports = router;
