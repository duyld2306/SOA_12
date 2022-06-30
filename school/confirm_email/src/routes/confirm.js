const express = require("express");
const confirmController = require("../app/controllers/ConfirmController");

const router = express.Router();

router.get("/:accessToken", confirmController.confirmationEmail);

module.exports = router;
