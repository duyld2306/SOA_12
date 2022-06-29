const express = require("express");
const router = express.Router();

const scoreController = require("../app/controllers/ScoreController");

// newController.index

// router.post('/create', dataController.createPosition)
// router.delete('/delete/:id',newController.delete)
// router.get('/:userId',newController.getUser)
// router.get('/:userId/track',newController.getTrack)
router.get("/update", scoreController.updateScore);
router.get("/check_update/:studentId", scoreController.checkUpdateScore);
router.get("/:studentId", scoreController.getScore);

module.exports = router;
