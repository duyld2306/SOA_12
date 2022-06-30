const express = require("express");
const sendEmailController = require("../app/controllers/SendEmailController");

const router = express.Router();

router.get("/request_scores/:accessToken", sendEmailController.requestScore);
router.get("/default_scores", sendEmailController.defaultScore);
router.get("/scores/:accessToken", sendEmailController.emailScore);
router.get("/update_scores/:accessToken", sendEmailController.checkUpdateScore);
router.post("/", sendEmailController.sendEmail);

module.exports = router;
