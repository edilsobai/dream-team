const express = require("express");
const router = express.Router();
const {
	getPlayersHandler, 
	postPlayersHandler,
	putPlayersHandler } = require("../controllers/players");

//get all players
router.get("/", getPlayersHandler);

//post players
router.post("/create_player", postPlayersHandler);

//put players
router.put("/:player_name", putPlayersHandler);

module.exports = router;