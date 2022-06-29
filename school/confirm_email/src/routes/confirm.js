const express = require("express");
const router = express.Router();

const confirmController = require("../app/controllers/ConfirmController");

// newController.index

// router.post('/create', dataController.createPosition)
// router.delete('/delete/:id',newController.delete)
// router.get('/:userId',newController.getUser)
// router.get('/:userId/track',newController.getTrack)
router.get("/:accessToken", confirmController.confirmationEmail);

module.exports = router;
