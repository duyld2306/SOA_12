const express = require("express");
const router = express.Router();

const sendEmailController = require("../app/controllers/SendEmailController");

// newController.index

// router.post('/create', dataController.createPosition)
// router.delete('/delete/:id',newController.delete)
// router.get('/:userId',newController.getUser)
router.get("/request_scores/:accessToken", sendEmailController.requestScore);
router.get("/default_scores", sendEmailController.defaultScore);
router.get("/scores/:accessToken", sendEmailController.emailScore);
router.get("/update_scores/:accessToken", sendEmailController.checkUpdateScore);
router.post("/", sendEmailController.sendEmail);

module.exports = router;
