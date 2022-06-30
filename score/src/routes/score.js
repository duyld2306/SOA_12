const express = require("express");
const scoreController = require("../app/controllers/ScoreController");

const router = express.Router();

router.get("/update", scoreController.updateScore);
router.get("/check_update/:studentId", scoreController.checkUpdateScore);
router.get("/:studentId", scoreController.getScore);

module.exports = router;
