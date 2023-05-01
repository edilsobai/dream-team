const express = require("express");
const router = express.Router();
const {
	getPlayersHandler, 
	postPlayersHandler,
	patchPlayersHandler } = require("../controllers/players");

//get all players
router.get("/", getPlayersHandler);

//post players
router.post("/create_player", postPlayersHandler);

//patch players
router.patch("/:player_name", patchPlayersHandler);

module.exports = router;